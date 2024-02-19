import {useState} from "react";
import {produce} from "immer";

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))

    // darft is a proxy of object that records changes we're gonna apply tp the bugs array.
    // imagine draft is a copy of the bugs array
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1)
      if (bug) bug.fixed = true
    }))
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
