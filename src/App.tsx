import {useState} from "react";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2', 'Product3']);

  return (
    <>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </>
  )
}

export default App;
