import React, {useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import AddReview from "./AddReview";
import Review from "./Review";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Colors } from "../../styles/theme/MainTheme";

const ReviewList = ({plants, reviews, setReviews}) => {
    const [open, setOpen ] = useState(false);
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
            <h1
            style={{fontFamily:"Flower",
                    color:Colors.primary,
                  textAlign:"center", marginBottom:"40px",
                  fontSize:"3rem"
                }}
            >What our customers think about us</h1>
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
                fontFamily:"Flower"
              }}
            >
              Add Review
            </Button>
          </Box>
          <AddReview reviews={reviews} setReviews={setReviews} plants={plants} open={open} setOpen={setOpen}/>
        </Container>
      );
};

export default ReviewList;