
import CartItem from './CartItem'

function Cart({ cart, isOpen, onClose, onRemove, onChangeQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <aside className="cart-panel" aria-label="Shopping bag">
        <div className="cart-header">
          <h2>Your Bag</h2>
          <button onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your bag is currently empty.</p>
            <button onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={onRemove}
                  onChangeQuantity={onChangeQuantity}
                />
              ))}
            </div>

            <div className="cart-footer">
              <div className="subtotal">
                <span>Subtotal</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <p>Demo storefront. No purchases are processed.</p>
              <button className="continue-button" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default Cart
