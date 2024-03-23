import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
// Import other slices

const rootReducer = combineReducers({
  cart: cartReducer,
  // other slices
});

export default rootReducer;