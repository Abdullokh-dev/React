import {useState} from "react";

function App() {
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });
  const [customer, setCustomer] = useState({
    name: 'Abdullokh',
    address: {
      city: 'Kokand',
      zipCode: 150500
    }
  })

  // const handleClick = () => {
  //   // const newDrink = {
  //   //   ...drink,
  //   //   price: 6,
  //   // }
  //
  //   setDrink({ ...drink, price: 6 });
  // };

  const setNestedObj = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 150501 }
    });
  };

  return (
    <>
      {customer.address.zipCode}<button onClick={setNestedObj}>click me</button>
    </>
  )
}

export default App;
