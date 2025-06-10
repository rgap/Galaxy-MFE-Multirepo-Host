import React, { lazy, Suspense } from "react";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

const Catalog = lazy(() => import("catalog/App"));
const Cart = lazy(() => import("cart/App"));
const Checkout = lazy(() => import("checkout/App"));

const Loading = () => <div>Loading...</div>;

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog/*",
        element: (
          <Suspense fallback={<Loading />}>
            <Catalog />
          </Suspense>
        ),
      },
      {
        path: "cart/*",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout/*",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
];
