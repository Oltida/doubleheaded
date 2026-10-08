
import { useState } from 'react'
import products from './data/products'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Filter products based on the search and category
  const filteredProducts = products.filter((product) => {
    const searchText = `
  ${product.name}
  ${product.color}
  ${product.category}
  ${product.category === 'T-Shirts' ? 'tshirt tshirts t-shirt shirt tee' : ''}
  ${product.category === 'Pants' ? 'sweatpants joggers trousers bottoms' : ''}
  ${product.category === 'Sets' ? 'hoodie tracksuit matching set outfit flare' : ''}
  ${product.category === 'Caps' ? 'hat baseball cap' : ''}
  ${product.category === 'Accessories' ? 'necklace chain pendant jewelry eagle' : ''}
`.toLowerCase()
    const matchesSearch = searchText.includes(search.toLowerCase().trim())
    const matchesCategory = selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Count all items in the shopping bag
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )


function addToCart(product, size) {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      (item) => item.id === product.id && item.size === size
    )

    if (existingItem) {
      return currentCart.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }

    return [...currentCart, { ...product, size, quantity: 1 }]
  })
}


function removeFromCart(id, size) {
  setCart((currentCart) =>
    currentCart.filter(
      (item) => !(item.id === id && item.size === size)
    )
  )
}

function changeQuantity(id, size, amount) {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}

  return (
    <div className="app" id="home">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="eyebrow">ALBANIAN STREETWEAR / 2026</span>
            <h1>DOUBLEHEADED.</h1>
            <p className="hero-tagline">Rooted in heritage. Made to be worn.</p>
            <a href="#collection" className="shop-link">
              Explore Collection ↗
            </a>
          </div>
          <span className="hero-number">01 / DOUBLEHEADED</span>
        </section>

        <section className="collection-section" id="collection">
          <div className="collection-heading">
            <div>
              <span className="eyebrow">THE DOUBLEHEADED EDIT</span>
              <h2>THE COLLECTION</h2>
            </div>
            <span className="result-count">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="shop-controls">
            <SearchBar
              search={search}
              onSearchChange={setSearch}
            />

            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <ProductList
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </section>
      </main>

      <footer className="site-footer">
        <h2>DOUBLEHEADED.</h2>
        <p>Albanian roots. Everyday identity.</p>
        <span>© 2026 DOUBLEHEADED. Student project.</span>
      </footer>

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onChangeQuantity={changeQuantity}
      />
    </div>
  )
}

export default App
