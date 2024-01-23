import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";

import PlantSelection from './PlantSelection';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomerForm from '../Customers/CustomerForm';
import { useFormik } from "formik";
import * as yup from "yup";



export default function PostReview({ plants }){
    const [formData, setFormData] = useState({
        rating:0,
        plantId:null,
        comment:null
    })
    const [rating, setRating] =  useState(0);
    const [plantId, setPlantId] = useState()
    const [newComment, setComment] = useState("")
    const [display, setDisplay] = useState({
        screen:"customer-name",
        customerId:null


        
    })



    const formSchema = yup.object().shape({
        review: yup.number().required("Must select review"),
        comment: yup.string().min(5).max(1000).required("Must enter comment")
        });
    
    
      const formik = useFormik({
          initialValues: {
            review: 0,
            rating: '',
            plant_id:'',
            customer_id: display.customerId
           
          },
          validationSchema: formSchema, 
          onSubmit: async (values) => {

            const review = {
                ...values, customer_id:display.customerId, review:parseInt(values['review'])
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
                  console.log('success')
                  
                  // navigate('/admin')
                } else {
                  alert("Error creating review, please check form inputs and try again")
                  
                  
              } 
          }
          catch (error) {
              throw new Error('HTTP error: ', error)
          }
      
  }});
//     const handleClick = (e) =>{
//         const submitReview = async() =>{
//             try {
//                 const response = await fetch('/reviews', {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         rating:null,
//                         comment:newComment,
//                         plant_id:null
//                     })
//                   })

//                   if (response.ok){
//                     console.log("success")
//                   }
//                   else{
//                     console.log("need to redo")
//                   }
//         }
//         catch(error){
//             throw new Error('HTTP error: ', error)
//         }
//     }
//     submitReview()
// }


    return(
        <Box sx={{marginTop:"150px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            {display.screen === 'customer-name' &&
            <CustomerForm setDisplay={setDisplay} display={display}/>}
            {
                display.screen === 'review-form' &&
                <Box>
                <Box component="form" onSubmit={formik.handleSubmit}>
                <InputLabel id="demo-simple-select-label">Please select a plant</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="plant_id"
                    name="plant_id"
                    onChange={formik.handleChange}
                    value={formik.values["plant_id"]}
                   
                    label="plantselection"
        
                    >
                        <p style={{ color: 'red' }}>{formik.errors["plant_id"]}</p>

                        {plants.map((plant) =>{
                                        return(
                                 
                                            <MenuItem key={plant.id}value={plant.id} >{plant.name}</MenuItem>
                                            
                                            
                                     
                                        )
                                    })}
                    </Select>
                <Rating sx={{marginTop:"50px"}}
                    id="rating"
                   name="rating"
                   type="number"
                   value={Number(formik.values["rating"])}
                   onChange={formik.handleChange}
                   
               />
                  <p style={{ color: 'red' }}>{formik.errors["rating"]}</p>
               <Box>
                   <Box>Please tell us about your experience with your purchase</Box>
                   <TextField
             id="comment"
             name="comment"
             label="Multiline"
             multiline
                                    
             value={formik.values["comment"]}
             onChange={formik.handleChange}
           />
              <p style={{ color: 'red' }}>{formik.errors["comment"]}</p>
                   
                   <button type="submit">Submit</button>
               </Box>
            </Box>
            </Box>

            }
          
            
        </Box>
    )

   

}