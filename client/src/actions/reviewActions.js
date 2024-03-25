export const FETCH_REVIEWS = 'FETCH_REVIEWS'
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';
export const POST_REVIEW = 'POST_REVIEW';




export const fetchReviews = () => async (dispatch) => {
  try {
    const response = await fetch(`/reviews`)
    if (!response.ok) throw new Error('Error fetching reviews');

    const reviews = await response.json();

    dispatch({
      type: FETCH_REVIEWS,
      payload: reviews,
    });
  }  catch (error) {
  dispatch({ type: FETCH_REVIEWS_FAILURE, payload: error.message });
}
};

export const postReview = (formData) => async (dispatch) => {

  try {
    const response = await fetch('/reviews', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Error adding reviewss');
      const review = await response.json();

      dispatch({
        type: POST_REVIEW,
        payload: review,
      });

}
 catch (error) {
    dispatch({ type: FETCH_REVIEWS_FAILURE, payload: error.message });
  }
}


