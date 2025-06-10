import React from "react";

const CatalogMock = () => {
  return (
    <div style={{ padding: "20px", border: "2px dashed #ccc", margin: "20px" }}>
      <h2>📦 Catalog (Standalone Mock)</h2>
      <p>This is a mock catalog component for standalone mode.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {[1, 2, 3, 4].map(id => (
          <div key={id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
            <h3>Product {id}</h3>
            <p>Price: ${(id * 25).toFixed(2)}</p>
            <button style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogMock;
