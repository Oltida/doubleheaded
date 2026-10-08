
function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">DOUBLEHEADED.</a>

      <nav>
        <a href="#collection">Shop Collection</a>
      </nav>

      <button className="cart-trigger" onClick={onOpenCart}>
        Bag
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  )
}

export default Navbar
