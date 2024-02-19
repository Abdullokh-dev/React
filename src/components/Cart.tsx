interface Props {
  cartItems: string[];
  onClear: () => void;
}

function Cart({cartItems, onClear}: Props) {
  return (
    <>
      <div>Cart</div>

      <ul>
        {cartItems.map((cart) => <li key={cart}>{cart}</li>)}
      </ul>

      <button onClick={onClear}> Clear </button>
    </>
  )
}

export default Cart;