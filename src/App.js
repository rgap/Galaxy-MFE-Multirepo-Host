import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loading } from "./components";
import CartProvider from "./providers/CartProvider";
import { routes } from "./routers";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <CartProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  );
};

export default App;
