import ListGroup from "./components/ListGroup";

function App() {
  const items = ['New York','San Fransisco', 'Tokyo', 'London', 'Paris'];

  return (
    <>
      <ListGroup items={items} heading={'List'} />
    </>
  )
}

export default App
