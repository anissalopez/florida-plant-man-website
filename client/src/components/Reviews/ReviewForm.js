import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFormik } from "formik";
import * as yup from "yup";



export default function ReviewForm({ plants, customerId }){

    const formSchema = yup.object().shape({
        review: yup.number().required("Must select review"),
        comment: yup.string().min(5).max(1000).required("Must enter comment")
        });
      
    const formik = useFormik({
          initialValues: {
            review: 0,
            rating: '',
            plant_id:'',
            customer_id: 0
          },
          validationSchema: formSchema, 
          onSubmit: async (values) => {
            const review = {
                ...values, customer_id:customerId, review: values['review']
            }
            try {
              const response = await fetch('/reviews', {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(review)
                });
                if (response.ok) {
                  console.log('review successfully submitted')

                } else {
                  alert("Error creating review, please check form inputs and try again")   
              } 
          }
          catch (error) {
              throw new Error('HTTP error: ', error)
          }
      
  }});

    return(
            <Box component="form" onSubmit={formik.handleSubmit}>
                <InputLabel id="select-plant">Please select a plant</InputLabel>
                    <Select
                    labelId="select-plant"
                    id="plant_id"
                    name="plant_id"
                    onChange={formik.handleChange}
                    value={formik.values["plant_id"]}
                    label="plantselection"
                    helperText ={formik.errors['plant_id']}
                    >
                      {plants.map((plant) =>{
                        return(<MenuItem key={plant.id}
                                value={plant.id}>
                                    {plant.name}
                                </MenuItem>)})}
                    </Select>
                <Rating sx={{marginTop:"50px"}}
                    id="rating"
                   name="rating"
                   type="number"
                   value={Number(formik.values["rating"])}
                   onChange={formik.handleChange}
                   helperText ={formik.errors['plant_id']}
                   
                />
               <Box>
                   <Box>Please tell us about your experience with your purchase</Box>
                   <TextField
                        id="comment"
                        name="comment"
                        label="Multiline"
                        multiline
                                                
                        value={formik.values["comment"]}
                        onChange={formik.handleChange}
                        helperText ={formik.errors['plant_id']}
                    />
                    <Button type="submit">Submit</Button>
              </Box>
            </Box>
    )}