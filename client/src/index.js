import React from "react";
import App from "./components/App/App";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "./fonts/Flowers-Sunday.otf"
import { LoadingProvider } from "./context/Loading";
import { ReviewsProvider } from "./context/Reviews";
import { CustomersProvider } from "./context/Customers";
import { CartProvider } from "./context/Cart";
import { PlantProvider } from "./context/Plants";
import { ErrorProvider } from "./context/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
      <ErrorProvider>
      <ReviewsProvider>
      <CustomersProvider>
      <CartProvider>
      <PlantProvider>
    
        <App />
     
      </PlantProvider>
      </CartProvider>
      </CustomersProvider>
      </ReviewsProvider>
      </ErrorProvider>
      </LoadingProvider> 
    </BrowserRouter>
  </React.StrictMode>
);
