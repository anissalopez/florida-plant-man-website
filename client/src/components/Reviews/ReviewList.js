import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import {  useSelector } from 'react-redux';

import AddReview from "./AddReview";
import Review from "./Review";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Colors } from "../../styles/theme/MainTheme";
import { ReviewHeader } from "../../styles/Review/Review.styles";



const ReviewList = () => {
    const [open, setOpen ] = useState(false);

    const reviews = useSelector((state) => state.reviews.reviews)
   

    const { pathname } = useLocation();

    const reviewList = reviews.slice(-3).map((review) => (
        <Review review={review} key={review.id}/>
    ));


    if (pathname === "/admin" || pathname === "/admin/messages" 
    || pathname === "/admin/customers" || pathname === "/admin/settings" 
    || pathname === "/admin/products" || pathname === "/admin/dashboard"
    || pathname === "/admin/reviews"
    ) 
    return null;
    
      return (
        <Container maxWidth="xl" sx={{marginTop:"50px", padding:"32px"}}>
            <ReviewHeader>What our customers think about us
            </ReviewHeader>
          <Grid container spacing={2}>
             {reviewList ? reviewList : <h2>Loading ...</h2>} 
          </Grid>
          <Box 
              sx={{
                display:"flex",
                justifyContent:"flex-end",
                marginBottom:"30px"
              }}>
            <Button 
              onClick={()=>{setOpen(true)}}
              sx={{
                backgroundColor:Colors.fourth,
                color:Colors.primary,
                fontFamily:"Flower",
                '&:hover':{
                  backgroundColor:Colors.secondary,
                  color:Colors.white2
                }
              }}
            >
              Add Review
            </Button>
          </Box>
          <AddReview  open={open} setOpen={setOpen}/>
        </Container>
      );
};

export default ReviewList;