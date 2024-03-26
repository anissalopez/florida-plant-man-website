import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer';
import plantsReducer from '../reducers/plantsReducer';
import customersReducer from './customerReducer';
import reviewsReducer from './reviewReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  plants:plantsReducer,
  customers:customersReducer,
  reviews:reviewsReducer

});

export default rootReducer;