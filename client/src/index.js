import React from "react";
import App from "./components/App/App";
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "./fonts/Flowers-Sunday.otf"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App /> 
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
