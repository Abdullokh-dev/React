interface  Props {
  cartItemsCount: number;
}

function NavBar({cartItemsCount}: Props) {
  return (
    <div>Navbar {cartItemsCount}</div>
  )
}

export default NavBar;
