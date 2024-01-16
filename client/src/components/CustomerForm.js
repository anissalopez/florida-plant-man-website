import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";


export default function CustomerForm({ }){
    const navigate = useNavigate()
    const formSchema = yup.object().shape({
      first_name: yup.string().min(5).max(50).required("Must enter first name"),
      last_name: yup.string().min(5).max(50).required("Must enter last name"),

      
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
                
                navigate('/admin')
              } else {
                alert("Error creating customer, please check form inputs and try again")
                
                
            } 
        }
        catch (error) {
            throw new Error('HTTP error: ', error)
        }
    
}});
      
  
    

    return (
        <div style={{ marginTop: '100px', marginLeft: '200px' }}>
          <form onSubmit={formik.handleSubmit}  style={{ margin: '30px' }}>
                  <div>
                    <label htmlFor="first_name">First Name</label>
                    <br />
                    <input
                      id="first_name"
                      name="first_name"
                      onChange={formik.handleChange}
                      value={formik.values["first_name"]}
                    />
                    <p style={{ color: 'red' }}>{formik.errors["first_name"]}</p>
                    <label htmlFor="first_name">Last Name</label>
                    <br />
                    <input
                      id="last_name"
                      name="last_name"
                      onChange={formik.handleChange}
                      value={formik.values["last_name"]}
                    />
                    <p style={{ color: 'red' }}>{formik.errors["last_name"]}</p>
                  </div>
                

            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };



  

 
    
  