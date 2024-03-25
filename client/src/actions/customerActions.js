export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const POST_CUSTOMER = 'POST_CUSTOMER';




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

}
 catch (error) {
    dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
  }
}



