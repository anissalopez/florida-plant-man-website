export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const POST_CUSTOMER = 'POST_CUSTOMER';
export const PATCH_CUSTOMER = 'PATCH_CUSTOMER';




export const fetchCustomers = () => async (dispatch) => {
  try {
    const response = await fetch(`/customers`)
    if (!response.ok) throw new Error('Error fetching customers');

    const customers = await response.json();

    dispatch({
      type: FETCH_CUSTOMERS,
      payload: customers,
    });
  }  catch (error) {
  dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
}
};

export const postCustomer = (formData) => async (dispatch) => {

  try {
    const response = await fetch('/customers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData, null, 2)
      });
      if (!response.ok) throw new Error('Error adding customers');
      const customer = await response.json();
      
      dispatch({
        type: POST_CUSTOMER,
        payload: customer,
      });
      return customer.id


}
 catch (error) {
    dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
  }
}

export const updateCustomer = (customerId, plantId) => async (dispatch) => {
 
  try {
    const response = await fetch(`/customers`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({customerId:customerId, plantId:plantId})
 
    });
    if (!response.ok) throw new Error('Error updating customer');

    const updatedCustomer = await response.json();
       
    dispatch({
      type: PATCH_CUSTOMER,
      payload: updatedCustomer,
    });
  } catch (error) {
    dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
  }
};



