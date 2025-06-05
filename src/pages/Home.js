import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome to Our Store</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Discover our amazing products and great deals!
      </p>
      
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <Link
          to="/catalog"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '1.1rem'
          }}
        >
          Browse Catalog
        </Link>
        
      </div>
    </div>
  );
};

export default Home; 