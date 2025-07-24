import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';

// Pages
import Index from './pages/Index';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Invoice from './pages/Invoice';

// Components
import ProductAssistant from './components/ProductAssistant';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50" dir="rtl">
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/invoice/:orderId" component={Invoice} />
            <Route>
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    الصفحة غير موجودة
                  </h1>
                  <p className="text-gray-600">
                    عذراً، الصفحة التي تبحث عنها غير متاحة
                  </p>
                </div>
              </div>
            </Route>
          </Switch>
          
          <ProductAssistant />
          <Toaster position="top-center" />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;