import React, { lazy, Suspense } from "react";
import { Loading } from "../components";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

const Catalog = lazy(() => import("catalog/App"));
const Cart = lazy(() => import("cart/App"));
const Checkout = lazy(() => import("checkout/App"));

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
          <Suspense fallback={<Loading message="Loading catalog..." />}>
            <Catalog />
          </Suspense>
        ),
      },
      {
        path: "cart/*",
        element: (
          <Suspense fallback={<Loading message="Loading cart..." />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout/*",
        element: (
          <Suspense fallback={<Loading message="Loading checkout..." />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
];
