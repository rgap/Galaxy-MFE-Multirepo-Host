import { Button } from "mfe-common-components";
import React, { lazy, Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Import CartWidget lazily
const CartWidget = lazy(() => import("cart/CartWidget"));

const LoadingFallback = () => <div className="p-4">Loading cart...</div>;

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
        <div className="p-4 text-gray-600">
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
      <nav className="p-4 bg-gray-50 border-b border-gray-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-4">
            <Link to="/" className="no-underline text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/catalog" className="no-underline text-gray-800 hover:text-blue-600 transition-colors">
              Catalog
            </Link>
            <Link to="/checkout" className="no-underline text-gray-800 hover:text-blue-600 transition-colors">
              Checkout
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto min-h-[calc(100vh-57px)]">
        <main className={`flex-1 p-8 ${isCheckoutPage ? "max-w-full" : "max-w-[calc(100%-400px)]"}`}>
          <Outlet />
        </main>

        {!isCheckoutPage && (
          <aside className="w-96 border-l border-gray-300 bg-white">
            <CartWidgetContainer />
          </aside>
        )}
      </div>
    </div>
  );
};

export default RootLayout;
