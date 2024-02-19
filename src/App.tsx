import {useState} from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'john'
    }
  });
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['mushroom']
  })
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ]
  })

  const updateGame = () => {
    setGame({...game, player: {...game.player, name: 'Bob'} })
  }

  const updatePizza = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'cheese']})
  }

  const updateCart = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  }

  return (
    <>
      {game.player.name} <button onClick={updateGame}>update game</button>
      <br/> <hr/>

      <h4>{pizza.name}</h4>

      <ul>{pizza.toppings.map((topping) => <li key={topping}>{topping}</li>)}</ul>

      <button onClick={updatePizza}>update pizza</button>
      <br/> <hr/>

      <h4>Carts</h4>

      <ul>{cart.items.map((item) => <li key={item.id}>{item.title}: {item.quantity}</li>)}</ul>

      <button onClick={updateCart}>update cart</button>
    </>
  )
}

export default App;
