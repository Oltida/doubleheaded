
function CartItem({ item, onRemove, onChangeQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>{item.color} / {item.size}</p>
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>

        <div className="quantity-controls">
          <button onClick={() => onChangeQuantity(item.id, item.size, -1)}>
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onChangeQuantity(item.id, item.size, 1)}>
            +
          </button>
        </div>

        <button
          className="remove-button"
          onClick={() => onRemove(item.id, item.size)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
