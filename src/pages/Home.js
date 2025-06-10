// ... existing code ...
import { Button } from "mfe-common-components";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome to Our Store</h1>
      <p className="text-xl mb-8 text-gray-600">Discover our amazing products and great deals!</p>

      <div className="flex gap-8 justify-center mt-8">
        <Link to="/catalog" className="no-underline">
          <Button variant="primary">Browse Catalog</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
