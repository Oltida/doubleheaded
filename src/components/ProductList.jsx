
import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-results">
        <h3>No products found.</h3>
        <p>Try searching for something else.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
