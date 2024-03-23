import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Your combined reducers

const store = configureStore({
  reducer: rootReducer,
  // Middleware and DevTools extension are enabled by default
});

export default store;

