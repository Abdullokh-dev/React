import {useState} from "react";

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>

      <ul>
        {bugs.map((bug) =>
          <li key={bug.id}>{bug.fixed.toString()}</li>
        )}
      </ul>
    </>
  )
}

export default App;
