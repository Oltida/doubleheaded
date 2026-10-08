
import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [showSizeError, setShowSizeError] = useState(false)

  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const isOneSize = ['Caps', 'Accessories'].includes(product.category)

  function handleAddToCart() {
    if (!isOneSize && !selectedSize) {
      setShowSizeError(true)
      return
    }

    onAddToCart(product, isOneSize ? 'One Size' : selectedSize)
    setShowSizeError(false)
  }

  function handleSizeSelect(size) {
    setSelectedSize(size)
    setShowSizeError(false)
  }

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

      <div className="size-section">
        <p>Size: {isOneSize ? 'One Size' : selectedSize || 'Not selected'}</p>

        {!isOneSize && (
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {showSizeError && (
          <p className="size-error">Please select a size first.</p>
        )}
      </div>

      <button className="add-button" onClick={handleAddToCart}>
        Add to Cart +
      </button>
    </article>
  )
}

export default ProductCard
