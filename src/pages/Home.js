// ... existing code ...
import { Button } from "mfe-common-components";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Welcome to Our Store</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Discover our amazing products and great deals!</p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Link to="/catalog" style={{ textDecoration: "none" }}>
          <Button variant="primary">Browse Catalog</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
