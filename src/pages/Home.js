import { Button } from "mfe-common-components";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Store</h1>
      <p className="home-description">Discover our amazing products and great deals!</p>

      <div className="home-actions">
        <Link to="/catalog" className="no-underline">
          <Button variant="primary">Browse Catalog</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
