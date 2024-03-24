import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import plantsReducer from '../reducers/plantsReducer';
// Import other slices

const rootReducer = combineReducers({
  cart: cartReducer,
  plants:plantsReducer
  // other slices
});

export default rootReducer;