import { FETCH_CUSTOMERS, FETCH_CUSTOMERS_FAILURE, POST_CUSTOMER, PATCH_CUSTOMER } from "../actions/customerActions";
const initialState = {
  customers: [],
  currentCustomerId:null,
  loading: true,
  error: null,
};

function customersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CUSTOMERS:
      return { ...state, customers: action.payload, loading:false };
    case POST_CUSTOMER:
      const currentCustomers = state.customers;
      const newCustomers = [...currentCustomers, action.payload];
      return{...state, customers: newCustomers,currentCustomerId:action.payload.id, loading:false };  
    case PATCH_CUSTOMER:
      const newCustomerArray = state.customers.map((customer) => {
        if(customer.id === action.payload.id) {
            return {
              ...customer,
              ...action.payload
            };
          } else {
            return customer;
          };
        });
  return {...state, customers:newCustomerArray, loading:false};  
    default:
      return state;
  }
}

export default customersReducer;

