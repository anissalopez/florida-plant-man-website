import React, { useState } from "react";

import CustomerForm from '../Customers/CustomerForm';
import ReviewForm from "./ReviewForm";

import Box from '@mui/material/Box';



export default function PostReview({ plants }){
    const [display, setDisplay] = useState({
        screen:"customer-name",
        customerId:null    
    })




    return(
        <Box sx={{marginTop:"150px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            {display.screen === 'customer-name' &&
            <CustomerForm setDisplay={setDisplay} display={display}/>}
            {display.screen === 'review-form' && <ReviewForm plants={plants} customerId={display.customerId} />}
        </Box>            
)}