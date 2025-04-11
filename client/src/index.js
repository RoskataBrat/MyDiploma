import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './Pages/Cart/CartContext';
import { SubscriptionProvider } from "./context/SubscriptionContext";

// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the necessary providers
root.render(
  <React.StrictMode>
    <SubscriptionProvider> {/* Provides subscription state */}
      <CartProvider> {/* Provides cart state */}
        <App /> {/* Main app component */}
      </CartProvider>
    </SubscriptionProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
