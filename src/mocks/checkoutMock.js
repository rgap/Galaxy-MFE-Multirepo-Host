import React from "react";

const CheckoutMock = () => {
  return (
    <div style={{ padding: "20px", border: "2px dashed #ccc", margin: "20px" }}>
      <h2>💳 Checkout (Standalone Mock)</h2>
      <p>This is a mock checkout component for standalone mode.</p>
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <h3>Order Summary</h3>
          <div style={{ marginBottom: "15px" }}>
            <div>Sample Product × 2</div>
            <div>Price: $59.98</div>
          </div>
          <div style={{ borderTop: "1px solid #ddd", paddingTop: "15px", marginTop: "15px" }}>
            <strong>Total: $59.98</strong>
          </div>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMock;
