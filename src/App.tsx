import ListGroup from "./components/ListGroup";

function App() {
  const items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <ListGroup items={items} heading={'List'} onSelectItem={handleSelectItem}/>
    </>
  )
}

export default App
