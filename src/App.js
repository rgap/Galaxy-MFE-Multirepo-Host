import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routers";

// Lazy load the CartProvider from the remote module
const CartProviderComponent = lazy(() =>
  import("cart/CartContext").then(module => ({
    default: ({ children }) => React.createElement(module.CartProvider, {}, children),
  }))
);

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Suspense fallback={<div>Loading cart provider...</div>}>
      <CartProviderComponent>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </CartProviderComponent>
    </Suspense>
  );
};

export default App;
