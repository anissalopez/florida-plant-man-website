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
    // Safely get the current cart items from the state
    const currentCartItems = getState().cart.items.cartitems || [];

    // Create the optimistic cart items by updating the item quantity
    const optimisticCartItems = currentCartItems.map(item => 
        item.id === id ? { ...item, qty } : item
    );

    // Dispatch an action to optimistically update the cart
    dispatch({
        type: 'UPDATE_CART_ITEM_OPTIMISTIC',
        payload: optimisticCartItems,
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
        // Dispatch an action with the actual updated cart from the server
        dispatch({
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
        // Revert the optimistic update if the server request fails
        dispatch({
            type: 'FETCH_CART_ITEMS_FAILURE',
            payload: currentCartItems,
        });
        dispatch({ type: 'FETCH_CART_FAILURE', payload: error.message });
    }
};

export const addCartItem = (id) => async (dispatch, getState) => {
    // Safely get the current cart items from the state
    const currentCartItems = getState().cart.items.cartitems || [];
    console.log(currentCartItems)

    // Create the optimistic cart items by adding the new item
    const newCartItem = { id, qty: 1 }; // Assuming quantity starts at 1
    const optimisticCartItems = [...currentCartItems, newCartItem];

    // Dispatch an action to optimistically update the cart
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
        // Dispatch an action with the actual updated cart from the server
        dispatch({
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
        // Revert the optimistic update if the server request fails
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
    // Safely get the current cart items from the state
    const currentCartItems = getState().cart.items.cartitems || [];

    // Create the optimistic cart items by removing the specified item
    const optimisticCartItems = currentCartItems.filter(item => item.id !== id);

    // Dispatch an action to optimistically update the cart
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
        // Dispatch an action with the actual updated cart from the server
        dispatch({
            type: 'FETCH_CART_ITEMS_SUCCESS',
            payload: updatedCart,
        });
    } catch (error) {
        // Revert the optimistic update if the server request fails
        dispatch({
            type: 'FETCH_CART_ITEMS_FAILURE',
            payload: currentCartItems,
        });
        dispatch({ type: 'FETCH_CART_FAILURE', payload: error.message });
    }
};


