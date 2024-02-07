import React, {useState, useEffect} from "react";
import App from "./components/App/App";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "./fonts/Flowers-Sunday.otf"
import { LoadingProvider} from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingProvider>
    <App />
    </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
