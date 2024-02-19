import {useState} from "react";

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add
    setTags([ ...tags, 'exciting' ])

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'))

    // Update
    // You can use setTags([ ...tags, 'exciting' ]) like Add or
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  }

  return (
    <>
      <ul>
        {tags.map((tag) =>
          <li key={tag} onClick={handleClick}> {tag} </li>
        )}
      </ul>
    </>
  )
}

export default App;
