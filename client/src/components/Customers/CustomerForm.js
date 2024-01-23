import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { FormContainer, FormInput } from '../../styles/CustomerForm.styles';
import setBodyColor from '../AppVariables/bodyColor';

import { useFormik } from "formik";
import * as yup from "yup";


export default function CustomerForm({ setDisplay, display }){
 
    setBodyColor({color:"#f1f1f1"})
    const formSchema = yup.object().shape({
      first_name: yup.string().min(2).max(100).required("Must enter first name"),
      last_name: yup.string().min(2).max(100).required("Must enter last name")
      });

    const formik = useFormik({
        initialValues: {
          first_name: '',
          last_name: '',  
        },
        validationSchema: formSchema, 
        onSubmit: async (values) => {
            try {
              const response = await fetch('/customers', {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values, null, 2)
                });
              if (response.ok) {
                const customer = await response.json()
                setDisplay({...display, screen:"review-form", customerId:customer.id})
              } else {
                alert("Error creating customer, please check form inputs and try again") 
            } 
        }
        catch (error) {
            throw new Error('HTTP error: ', error)
        }  
}});
      
    return (
        <FormContainer >
          <h1>We're excited to hear from you! What can we call you while we celebrate your review? </h1>
          <Box component="form" onSubmit={formik.handleSubmit} className="form-components"  >
            <FormInput
                FormHelperTextProps={{className:"helper"}}
                InputLabelProps={{className:"label"}}
                className="input-fields"
                helperText ={formik.errors['first_name']}
                label="First Name"
                id="first_name"
                name="first_name"
                onChange={formik.handleChange}
                value={formik.values["first_name"]}  
            />
            <FormInput
                FormHelperTextProps={{className:"helper"}}
                InputLabelProps={{className:"label"}}
                className="input-fields"
                helperText ={formik.errors['last_name']}
                label="Last Name"
                id="last_name"
                name="last_name"
                onChange={formik.handleChange}
                value={formik.values["last_name"]}
                    />
            <Box sx={{display:"flex", justifyContent:'end'}}>
              <Button className="next-button" type="submit">Next</Button>
            </Box>
          </Box>
        </FormContainer>
      );
    };



  

 
    
  