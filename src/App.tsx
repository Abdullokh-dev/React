import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <ListGroup clickId={(item) => console.log(item)} />
    </>
  )
}

export default App
