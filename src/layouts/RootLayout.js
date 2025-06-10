import { Button } from "mfe-common-components";
import React, { lazy, Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Import CartWidget lazily
const CartWidget = lazy(() => import("cart/CartWidget"));

const LoadingFallback = () => <div className="loading">Loading cart...</div>;

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in component:", error);
    console.error("Error details:", errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <p>Failed to load component. Please try again later.</p>
          <Button variant="primary" onClick={this.resetError}>
            Retry
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

const CartWidgetContainer = () => (
  <ErrorBoundaryComponent>
    <Suspense fallback={<LoadingFallback />}>
      <CartWidget />
    </Suspense>
  </ErrorBoundaryComponent>
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
