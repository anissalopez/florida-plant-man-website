import { FETCH_REVIEWS, FETCH_REVIEWS_FAILURE, POST_REVIEW } from "../actions/reviewActions";
const initialState = {
  reviews: [],
  loading: true,
  error: null,
};

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEWS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_REVIEWS:
      return { ...state, reviews: action.payload, loading:false };
    case POST_REVIEW:
      const currentReviews = state.reviews;
      const newReviews = [...currentReviews, action.payload];
      return{...state, reviews: newReviews, loading:false };  
    default:
      return state;
  }
}

export default reviewsReducer;

