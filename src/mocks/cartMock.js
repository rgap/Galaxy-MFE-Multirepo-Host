import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{ id: 1, name: "Sample Product", price: 29.99, quantity: 2 }]);

  const value = {
    cart,
    addToCart: product => console.log("[STANDALONE MODE] Adding to cart:", product),
    removeFromCart: id => console.log("[STANDALONE MODE] Removing from cart:", id),
    cartCount: cart.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    return {
      cart: [{ id: 1, name: "Sample Product", price: 29.99, quantity: 2 }],
      addToCart: product => console.log("[STANDALONE MODE] Mock addToCart:", product),
      removeFromCart: id => console.log("[STANDALONE MODE] Mock removeFromCart:", id),
      cartCount: 1,
    };
  }
  return context;
};

// Cart App Mock
const CartMock = () => {
  return (
    <div style={{ padding: "20px", border: "2px dashed #ccc", margin: "20px" }}>
      <h2>🛒 Cart (Standalone Mock)</h2>
      <p>This is a mock cart component for standalone mode.</p>
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
          <h4>Sample Product</h4>
          <p>Price: $29.99 | Quantity: 2</p>
        </div>
        <div style={{ borderTop: "2px solid #333", paddingTop: "10px", marginTop: "10px" }}>
          <strong>Total: $59.98</strong>
        </div>
      </div>
    </div>
  );
};

// Cart Widget Mock
export const CartWidget = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "4px" }}>
      <span>🛒 Cart (1)</span>
    </div>
  );
};

export default CartMock;
