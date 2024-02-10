import React, { useState } from "react";

import CustomerForm from './CustomerForm';
import ReviewForm from "./ReviewForm";

import Box from '@mui/material/Box';



export default function PostReview({ plants }){
    const [display, setDisplay] = useState({
        screen:"customer-name",
        customerId:null    
    })




    return(
        <Box sx={{marginTop:"150px", display:"flex", alignItems:"center", justifyContent:"center"}}>
           
        </Box>            
)}