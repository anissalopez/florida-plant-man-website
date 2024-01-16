import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
// import formSchema from "./plantformSchema";

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';

// import AdminPanel from "./AdminPanel";

export default function PlantForm({ plants, setPlants}){
    const navigate = useNavigate()
    const formSchema = yup.object().shape({
      name: yup.string().min(5).required("Must enter plant name"),
      water: yup.string().min(5).required("Must enter water requirements"),
      sun: yup.string().min(5).required("Must enter min sun requirements"),
      qty: yup.number().positive().integer().required("Must enter qty"),
      price: yup.string()
      .matches(/^\d+\.[0-9][0-9]$/, "Price must be in string format with two decimal points i.e 3.44")
      .required("Price must be in string format with two decimal points i.e 3.44"),
      image1:yup.mixed()
          .required("Required"),
    
      image2:yup.mixed()
          .required("Required"),
  
      image3:yup.mixed()
          .required("Required"),
        
      description:yup.string().min(5).required("Description must be min of 5 characters")
          
      });
  
  
    const formik = useFormik({
        initialValues: {
          name: '',
          price: '',
          description: '',
          image1: null,
          image2: null,
          image3: null,
          water: '',
          sun: '',
          qty: '',
        },
        validationSchema: formSchema, 
        onSubmit: 
        async (values) => {
            const formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value]);
              }
            
            for (let property of formData.entries()) {
                console.log(property[0], property[1]);
              }
      
            try {

              const response = await fetch('/plants', {
                method: 'POST',    
                mode:'same-origin',
                body: formData,
              });
              console.log(response)
              if (response.ok) {
                for (let key in response) {
                    console.log('response: ', key, response[key]);
                  }
                navigate('/admin')
              } else {
                
            } 
        }
        catch (error) {
            throw new Error('HTTP error: ', error)
        }
    
}});
      
  
    const labels = ["Plant Name", "Price", "Description", "Image1", "Image2", "Image3", "Water Requirements", "Sun Requirements", "Qty"]


    return (
        <div style={{ marginTop: '100px', marginLeft: '200px' }}>
          <form onSubmit={formik.handleSubmit}  style={{ margin: '30px' }}>
            {[
              'name',
              'price',
              'description',
              'image1',
              'image2',
              'image3',
              'water',
              'sun',
              'qty',
            ].map((value, index) => {
              if (value.startsWith('image')) {
                return (
                  <div key={value}>
                    <label htmlFor={value}>{labels[index]}</label>
                    <br />
                    <input
                      id={value}
                      name={value}
                      onChange={(event) => {
                        formik.setFieldValue(value, event.currentTarget.files[0])
                        console.log(value)
                      }}
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg, .webp"
                    />
                    <p style={{ color: 'red' }}>{formik.errors[value]}</p>
                  </div>
                );
              } else {
                return (
                  <div key={value}>
                    <label htmlFor={value}>{labels[index]}</label>
                    <br />
                    <input
                      id={value}
                      name={value}
                      onChange={formik.handleChange}
                      value={formik.values[value]}
                    />
                    <p style={{ color: 'red' }}>{formik.errors[value]}</p>
                  </div>
                );
              }
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };



  

 
    
  