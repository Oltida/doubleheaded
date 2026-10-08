
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={`${product.color} ${product.name}`} />
      </div>

      <div className="product-details">
        <div>
          <h3>{product.name}</h3>
          <p>{product.color}</p>
        </div>
        <span>${product.price.toFixed(2)}</span>
      </div>

      <button
        className="add-button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart +
      </button>
    </article>
  )
}

export default ProductCard
