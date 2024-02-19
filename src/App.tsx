import {useState} from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6,
    // }

    setDrink({ ...drink, price: 6 });
  };

  return (
    <>
      {drink.price}<button onClick={handleClick}>click me</button>
    </>
  )
}

export default App;
