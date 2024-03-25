
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';


export const updateCartItem = (id, qty) => async (dispatch) => {
  
  try {
    const response = await fetch('/cartitems', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plant_id: id, qty: qty })
    });
    if (!response.ok) throw new Error('Error updating cart item');

    const updatedCart = await response.json();
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: updatedCart,
    });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
  }
};
export const addCartItem = (id, qty) => async (dispatch) => {
  try {
    const response = await fetch('/cartitems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plant_id: id  })
    });
    if (!response.ok) throw new Error('Error updating cart item');

    const updatedCart = await response.json();
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: updatedCart,
    });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
  }
};


export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/cartitems`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plant_id: id})
    });
    if (!response.ok) throw new Error('Error deleting cart item');

    const updatedCart = await response.json();
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: updatedCart,
    });
  } catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
  }
};


export const fetchCart = () => async (dispatch) => {
    try {
      const response = await fetch(`/cartitems`)
      if (!response.ok) throw new Error('Error deleting cart item');
  
      const cartItems = await response.json();
      dispatch({
        type: FETCH_CART_ITEMS,
        payload: cartItems,
      });
    }  catch (error) {
    dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
  }
};
