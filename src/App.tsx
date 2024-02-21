import {useEffect, useState} from "react";
import apiClient, {CanceledError} from './services/api-client';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect( () => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
       .get<User[]>('/users', {signal: controller.signal})
       .then((res) => {
         setUsers(res.data);
         setLoading(false);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;
         setError(err.message);
         setLoading(false);
       })

     return () => controller.abort();
  }, [])
  // Delete User
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    apiClient.delete('/users/' + user.id)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }
  // Add User
  const addUser = () => {
    const originalUsers = [...users];
    const  newUser ={id: 0, name: 'Abdullah'};
    setUsers([newUser, ...users]);

    apiClient.post('/users', newUser)
      .then(({data: savedUser}) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }
  // Update User
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updateUser = { ...user, name: user.name + '!' };
    setUsers(users.map(u => u.id === user.id ? updateUser : u));

    apiClient.patch('/users/' + user.id, updateUser)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }
  return (
    <>
      { error && <p className="text-danger">{error}</p> }
      { isLoading && <div className="spinner-border"></div> }
      <button className="btn btn-primary mb-3" onClick={addUser}>Add User</button>
      <ul className="list-group">
        {users.map(user =>
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button className="btn btn-outline-secondary me-1" onClick={() => updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default App;
