import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item.id, e.target.value);
  };

  return (
    <div className="cart-item">
      <h3>{item.productName}</h3>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;