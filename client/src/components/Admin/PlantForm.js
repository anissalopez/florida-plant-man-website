import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { FormLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Input } from '@mui/base/Input';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { Colors } from "../../styles/theme/MainTheme";



export default function PlantForm({initialValues, setInitialValues, setOpen, open, handleClose, updatePlantList}){
   




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
      enableReinitialize: true,
       initialValues: initialValues || { // Set initial form values using initialValues prop
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
        onSubmit: async ( values, {resetForm} ) => {
            const formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value]);
              };
          
            
            // for (let property of formData.entries()) {
            //     console.log(property[0], property[1]);
            //   }
      
            try {
              fetch(`/plants`, {
                method: "POST",
                mode:"same-origin",
                body: formData
              })
                .then(resp => resp.json())
                .then(data => updatePlantList(data));
                
                handleClose()
                alert("Product added succesfully")
                resetForm({values:''})
            //   const response = await fetch('/plants', {
            //     method: 'POST',    
            //     mode:'same-origin',
            //     body: formData,
            //   });
            //   if (response.ok) {
            //     handleClose()
            //     const data = await response.json()
  
            //     await updatePlantList(data)
            //     alert("Product added succesfully")
             
            //   } else {
            //     alert('error submitting form, please try again')
                
            // }
        }
        catch (error) {
            throw new Error('HTTP error: ', error)
        }
}});
    

console.log(formik.values)
  
    const labels = ["Plant Name", "Price", "Description","Water Requirements", "Sun Requirements", "Qty"]


    return (
        <Dialog open={open} fullWidth
          maxWidth="lg">
            <DialogTitle>
              {"Add Product"}
            </DialogTitle>
       

          <form onSubmit={formik.handleSubmit}  >
          <DialogContent>
            <Grid container spacing={2}>
            {/* {[
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
                return ( */}
                 <Grid item lg={4} xs={12} key="image1">
                    <InputLabel htmlFor="image1">Image 1</InputLabel>
               
                    <Input
                      id="image1"
                      name="image1"
                      onChange={(event) => {
                        formik.setFieldValue("image1", event.currentTarget.files[0])
                        
                      }}
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg, .webp"
                    />
                    {initialValues.image1 != null && 
                   <div>
                   <img style={{height:"70px", width:"80px"}}src={initialValues.image1}/> 
                    
                    <p style={{ color: 'red' }}>{formik.errors['image1']}</p>
                    </div>
                    }
                   </Grid>
                   
              
                  
                 <Grid item lg={4} xs={12} key="image2">
                    <InputLabel htmlFor="image2">Image 2</InputLabel>
               
                    <Input
                      id="image2"
                      name="image2"
                      onChange={(event) => {
                        formik.setFieldValue("image2", event.currentTarget.files[0])
                       
                      }}
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg, .webp"
                    />
                  
                    <p style={{ color: 'red' }}>{formik.errors["image2"]}</p>
                  </Grid>
                 
                 <Grid item lg={4} xs={12} key="image3">
                    <InputLabel htmlFor="image3">Image 3</InputLabel>
               
                    <Input
                      id="image3"
                      name="image3"
                      onChange={(event) => {
                        formik.setFieldValue("image3", event.currentTarget.files[0])
                       
                      }}
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg, .webp"
                    />
                  
                    <p style={{ color: 'red' }}>{formik.errors["image3"]}</p>
                  </Grid>
                 
              
              {/* } else { */}


              {[
              'name',
              'price',
              'description',
              'water',
              'sun',
              'qty',
            ].map((value, index) => {
                return (
                  <Grid item xs={12} key={value}>
                    <InputLabel htmlFor={value}>{labels[index]}</InputLabel>
                    <TextField
                    fullWidth
                     variant="outlined"
                      id={value}
                      name={value}
                      onChange={formik.handleChange}
                      value={formik.values[value]}
                      
                    />
                    <p style={{ color: 'red' }}>{formik.errors[value]}</p>
                  </Grid>
                )
                })}
          
        </Grid>
        </DialogContent>
        <DialogActions>
        <Button 
            sx={{backgroundColor:Colors.admingreen3,
           
          fontWeight:"bold"}}
            type="submit"
        
          >
              Submit
            </Button>
        <Button 
            sx={{backgroundColor:Colors.adminorange,
              fontWeight:"bold"}}
          
           onClick={handleClose}
          >
             Cancel
            </Button>
        </DialogActions>
        </form>
     
        </Dialog>
      )};



  

 
    
  