import { CartProvider } from 'cart/CartContext';
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routers';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <CartProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  );
};

export default App; 