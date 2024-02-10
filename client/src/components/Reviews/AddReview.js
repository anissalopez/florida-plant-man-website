import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AddReviewContainer } from '../../styles/AddReview.styles';


import { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import ReviewForm from './ReviewForm';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';


import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';


import CustomerForm from './CustomerForm';



export default function AddReview({ open, plants, setOpen }){
    const [display, setDisplay] = useState({
        screen:"customer-name",
        customerId:null    
    });
    return(
        <Dialog open={open} fullWidth maxWidth="lg"> 
          <DialogContent>
          {display.screen === 'customer-name' &&
            <CustomerForm setOpen={setOpen} setDisplay={setDisplay} 
            display={display}/>
           }
          {display.screen === 'review-form' && 
            <ReviewForm plants={plants} 
                setOpen={setOpen}
                customerId={display.customerId} />}    
          </DialogContent>      
      </Dialog>
      
    )}