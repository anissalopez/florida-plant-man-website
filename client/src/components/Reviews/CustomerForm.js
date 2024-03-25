import { useDispatch, useSelector } from 'react-redux';
import { postCustomer } from '../../actions/customerActions';

import { useFormik } from "formik";
import * as yup from "yup";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { FormContainer, CustomerFormInput, ButtonContainer } from '../../styles/Review/Review.styles';

export default function CustomerForm({ setDisplay, display, setOpen }){
    const dispatch = useDispatch();
    const currentCustomerId = useSelector(state => state.customers.currentCustomerId);
    const formSchema = yup.object().shape({
      first_name: yup.string().min(2).max(100).required("Required"),
      last_name: yup.string().min(2).max(100).required("Required")
      });

    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',  
        },
        validationSchema: formSchema, 
        onSubmit: async (values) => {
          dispatch(postCustomer(values))
          if (currentCustomerId) {
        
            setDisplay({ ...display, screen: "review-form", customerId: currentCustomerId });
          }     
    }});
      
    return (
        <FormContainer >
          <h2>We're excited to hear from you! What can we call you while we celebrate your review? </h2>
          <Box component="form" onSubmit={formik.handleSubmit} className="form-components">
            <CustomerFormInput
                FormHelperTextProps={{className:"helper"}}
                InputLabelProps={{className:"label"}}
                helperText ={formik.errors['first_name']}
          
                label="First Name"
                id="first_name"
                name="first_name"
                onChange={formik.handleChange}
                value={formik.values["first_name"]}  
            />
            <CustomerFormInput
                FormHelperTextProps={{className:"helper"}}
                InputLabelProps={{className:"label"}}
                helperText ={formik.errors['last_name']}
                label="Last Name"
                id="last_name"
                name="last_name"
                onChange={formik.handleChange}
                value={formik.values["last_name"]}
                    />
            <ButtonContainer>
              <Button className="cancel-button"
                onClick={()=>{setOpen(false)}}>
                  Cancel</Button>
              <Button className="next-button" type="submit">
                Next
              </Button>
            </ButtonContainer>
          </Box>
        </FormContainer>
      );
};



  

 
    
  