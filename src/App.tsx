import Button from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  useState()
  return (
    <>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </>
  )
}

export default App;
