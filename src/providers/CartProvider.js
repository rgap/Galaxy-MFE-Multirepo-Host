import React, { Suspense, lazy } from "react";
import { Loading } from "../components";

// Lazy load the CartProvider from the remote module
const RemoteCartProvider = lazy(() =>
  import("cart/CartContext").then(module => ({
    default: ({ children }) => React.createElement(module.CartProvider, {}, children),
  }))
);

const CartProvider = ({ children }) => {
  return (
    <Suspense fallback={<Loading message="Loading cart provider..." />}>
      <RemoteCartProvider>{children}</RemoteCartProvider>
    </Suspense>
  );
};

export default CartProvider;
