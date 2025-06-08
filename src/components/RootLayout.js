import { Button } from 'common-components-react';
import React, { lazy, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Import CartWidget lazily
const CartWidget = lazy(() => import('cart/CartWidget'));

const LoadingFallback = () => (
  <div style={{ padding: '1rem' }}>Loading cart...</div>
);

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error);
    console.error('Error details:', errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', color: '#666' }}>
          <p>Failed to load component. Please try again later.</p>
          <Button 
            variant="primary"
            onClick={this.resetError}
          >
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
  const isCheckoutPage = location.pathname.startsWith('/checkout');

  return (
    <div>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
            <Link to="/catalog" style={{ textDecoration: 'none', color: '#333' }}>Catalog</Link>
            <Link to="/checkout" style={{ textDecoration: 'none', color: '#333' }}>Checkout</Link>
          </div>
        </div>
      </nav>

      <div style={{
        display: 'flex',
        maxWidth: '1600px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 57px)'
      }}>
        <main style={{ 
          flex: 1, 
          padding: '2rem',
          maxWidth: isCheckoutPage ? '100%' : 'calc(100% - 400px)'
        }}>
          <Outlet />
        </main>

        {!isCheckoutPage && (
          <aside style={{
            width: '400px',
            borderLeft: '1px solid #ddd',
            backgroundColor: '#fff'
          }}>
            <CartWidgetContainer />
          </aside>
        )}
      </div>
    </div>
  );
};

export default RootLayout; 