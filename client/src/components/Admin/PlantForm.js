import { useFormik } from "formik";
import * as yup from "yup";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { Colors } from "../../styles/theme/MainTheme";


export default function PlantForm({ newProduct, initialValues, setOpen, open, handleClose, updatePlantList }) {
  


  const formSchema = yup.object().shape({
    name: yup.string().min(5).required("Must enter plant name"),
    water: yup.string().min(5).required("Must enter water requirements"),
    sun: yup.string().min(5).required("Must enter min sun requirements"),
    qty: yup.number().positive().integer().required("Must enter qty"),
    price: yup.string()
      .matches(/^\d+\.[0-9][0-9]$/, "Price must be in string format with two decimal points i.e 3.44")
      .required("Price must be in string format with two decimal points i.e 3.44"),
    image1: yup.mixed().required("Required"),
    image2: yup.mixed().required("Required"),
    image3: yup.mixed().required("Required"),
    description: yup.string().min(5).required("Description must be min of 5 characters")
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues || {
      name: '',
      price: '',
      description: '',
      image1: '',
      image2: '',
      image3: '',
      water: '',
      sun: '',
      qty: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, { resetForm }) => {
 
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
  
        const method = newProduct === null ? "POST" : "PATCH";
      
        let url = "/plants";
        if (method === "PATCH") {
          url += `/${initialValues.id}`; 
        }
      
        try {
          const response = await fetch(url, {
            method: method,
            mode: "same-origin",
            body: formData
          })
      
          if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
          }
      
          const data = await response.json();
          updatePlantList(method, data);
          setOpen(false);
          alert("Product " + (method === "PATCH" ? "updated" : "added") + " successfully");
          resetForm({ values: '' })
        } catch (error) {
          throw new Error('HTTP error: ' + error);
        }
    }
  })

  return (
    <Dialog open={open} fullWidth maxWidth="lg">
      <DialogTitle>{"Add Product"}</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
          {['image1', 'image2', 'image3'].map((value, index) => (
              <Grid item lg={4} xs={12} key={value}>
                <InputLabel>{`Image ${index + 1}`}</InputLabel>
                <input
                  id={value}
                  name={value}
                  // onChange={handleFileChange}
                  type="file"
                  accept=".jpg, .jpeg, .png, .svg, .webp"
                />
                <p style={{ color: 'red' }}>{formik.errors[value]}</p>
              </Grid>
              ))} 
            {['name', 'price', 'description', 'water', 'sun', 'qty'].map((value, index) => (
              <Grid item xs={12} key={value}>
                <InputLabel htmlFor={value}>{`${value.charAt(0).toUpperCase()}${value.slice(1)}`}</InputLabel>
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
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button sx={{ backgroundColor: Colors.admingreen3, fontWeight: "bold" }} type="submit">Submit</Button>
          <Button sx={{ backgroundColor: Colors.adminorange, fontWeight: "bold" }} onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}



  

 
    
  