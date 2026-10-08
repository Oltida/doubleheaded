
function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">DOUBLEHEADED.</a>

      <nav className="nav-links">
      <a href="#collection">Shop Collection</a>
      <span className="limited-label">LIMITED EDITION</span>
      </nav>

      <button className="cart-trigger" onClick={onOpenCart}>
        Bag
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  )
}

export default Navbar
