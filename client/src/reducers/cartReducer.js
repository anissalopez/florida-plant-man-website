import {
  ADD_CART_ITEM_OPTIMISTIC,
  UPDATE_CART_ITEM_OPTIMISTIC,
  DELETE_CART_ITEM_OPTIMISTIC,
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAILURE,
} from '../actions/cartActions.js';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_CART_ITEMS_REQUEST':
          return { ...state, loading: true, error: null };
      case 'FETCH_CART_ITEMS_SUCCESS':
          return { ...state, loading: false, items: action.payload };
      case 'FETCH_CART_ITEMS_FAILURE':
          return { ...state, loading: false, error: action.payload };
      case 'ADD_CART_ITEM_OPTIMISTIC':
      case 'UPDATE_CART_ITEM_OPTIMISTIC':
      case 'DELETE_CART_ITEM_OPTIMISTIC':
          return { ...state, items: action.payload };
      default:
          return state;
  }
};

export default cartReducer;


