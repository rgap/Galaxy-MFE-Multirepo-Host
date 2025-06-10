import React, { lazy, Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ErrorBoundary, Loading } from "../components";

// Import CartWidget lazily
const CartWidget = lazy(() => import("cart/CartWidget"));

const CartWidgetContainer = () => (
  <ErrorBoundary fallbackMessage="Failed to load cart. Please try again later.">
    <Suspense fallback={<Loading message="Loading cart..." />}>
      <CartWidget />
    </Suspense>
  </ErrorBoundary>
);

const RootLayout = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname.startsWith("/checkout");

  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/catalog" className="nav-link">
              Catalog
            </Link>
            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>
          </div>
        </div>
      </nav>

      <div className="main-container">
        <main className={`main-content ${isCheckoutPage ? "full-width" : "with-sidebar"}`}>
          <Outlet />
        </main>

        {!isCheckoutPage && (
          <aside className="sidebar">
            <CartWidgetContainer />
          </aside>
        )}
      </div>
    </div>
  );
};

export default RootLayout;
