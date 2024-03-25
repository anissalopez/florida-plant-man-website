import { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch } from 'react-redux';
import { postPlant, updatePlant } from "../../actions/plantsActions";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'

import { Colors } from "../../styles/theme/MainTheme";

import PlantFormImages from './PlantFormImages';
import PlantFormItems from './PlantFormItems';
import { fetchReviews } from '../../actions/reviewActions';

export default function PlantForm({ setInitialValues, initialValues, setOpen, open }) {
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

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
        };

        initialValues === null ? dispatch(postPlant(formData)) : dispatch(updatePlant(formData,initialValues.id));
        setOpen(false);
        setPreview(null);
         
        resetForm({ values: '' });
        setInitialValues(null);
    
    }
  });

  return (
    <Dialog open={open} fullWidth maxWidth="lg">
      <DialogTitle>{"Add Product"}</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
            <DialogContent>
              <Grid container spacing={2}>
                <PlantFormImages
                  initialValues={initialValues}
                  setPreview={setPreview}
                  formik={formik}
                  preview={preview}

                />
             
                <PlantFormItems formik={formik} />
            </Grid>
            </DialogContent>
            <DialogActions>
              <Button sx={{ backgroundColor: Colors.admingreen3, fontWeight: "bold" }} type="submit">
                Submit
              </Button>
              <Button sx={{ backgroundColor: Colors.adminorange, fontWeight: "bold" }} 
                      onClick={()=>{
                        setOpen(false)
                        setInitialValues(null)
                        setPreview(null)  
                      }}>
              Cancel
            </Button>
            </DialogActions>
        </form>
    </Dialog>
  );
};



  

 
    
  