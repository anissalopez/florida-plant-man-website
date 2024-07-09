export const ADD_CART_ITEM_OPTIMISTIC = 'ADD_CART_ITEM_OPTIMISTIC';
export const UPDATE_CART_ITEM_OPTIMISTIC = 'UPDATE_CART_ITEM_OPTIMISTIC';
export const DELETE_CART_ITEM_OPTIMISTIC = 'DELETE_CART_ITEM_OPTIMISTIC';
export const FETCH_CART_ITEMS_REQUEST = 'FETCH_CART_ITEMS_REQUEST';
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS';
export const FETCH_CART_ITEMS_FAILURE = 'FETCH_CART_ITEMS_FAILURE';


export const fetchCart = () => async (dispatch) => {
    try {
        const response = await fetch(`/cartitems`);
        if (!response.ok) throw new Error('Error fetching cart items');

        const cartItems = await response.json();
        dispatch({
            type: FETCH_CART_ITEMS_SUCCESS,
            payload: cartItems,
        });
    } catch (error) {
        dispatch({ type: FETCH_CART_ITEMS_FAILURE, payload: error.message });
    }
};

export const updateCartItem = (id, qty) => async (dispatch, getState) => {

    const currentCartItems = getState().cart.items.cartitems || [];
    dispatch({
        type: 'FETCH_CART_ITEMS_REQUEST',
    });

    
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
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
        
        dispatch({
            type: 'FETCH_CART_ITEMS_FAILURE',
            payload: currentCartItems,
        });
        dispatch({ type: 'FETCH_CART_FAILURE', payload: error.message });
    }
};

export const addCartItem = (id) => async (dispatch, getState) => {
    dispatch({
        type: 'FETCH_CART_ITEMS_REQUEST',
    });

    const currentCartItems = getState().cart.items.cartitems || [];
 

    const newCartItem = { id, qty: 1 }; 
    const optimisticCartItems = [...currentCartItems, newCartItem];

    dispatch({
        type: 'ADD_CART_ITEM_OPTIMISTIC',
        payload: optimisticCartItems,
    });

    try {
        const response = await fetch('/cartitems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ plant_id: id })
        });
        if (!response.ok) throw new Error('Error adding cart item');

        const updatedCart = await response.json();
       
        dispatch({
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
    
        dispatch({
            type: 'FETCH_CART_ITEMS_FAILURE',
            payload: currentCartItems,
        });
        dispatch({
            type: FETCH_CART_ITEMS_SUCCESS,
            payload: currentCartItems,
        });
        dispatch({ type: 'FETCH_CART_FAILURE', payload: error.message });
    }
};


export const deleteCartItem = (id) => async (dispatch, getState) => {
    const currentCartItems = getState().cart.items.cartitems || [];
    const optimisticCartItems = currentCartItems.filter(item => item.id !== id);
    
    dispatch({
        type: 'DELETE_CART_ITEM_OPTIMISTIC',
        payload: optimisticCartItems,
    });

    try {
        const response = await fetch(`/cartitems`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ plant_id: id })
        });
        if (!response.ok) throw new Error('Error deleting cart item');

        const updatedCart = await response.json();
   
        dispatch({
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
     
        dispatch({
            type: 'FETCH_CART_ITEMS_FAILURE',
            payload: currentCartItems,
        });
        dispatch({ type: 'FETCH_CART_FAILURE', payload: error.message });
    }
};


