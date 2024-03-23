import { FETCH_CART_FAILURE, FETCH_CART_ITEMS } from "../actions/cartActions";

const initialState = {
  cart: [],
  testing:true,
  loading: true,
  error: null,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CART_ITEMS:
      return { ...state, cart: action.payload, testing:false, loading:false };
    default:
      return state;
  }
}

export default cartReducer;

