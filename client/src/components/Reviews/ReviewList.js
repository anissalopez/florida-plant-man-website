import React, {useEffect, useState } from "react";
import Review from "./Review";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddReview from "./AddReview";

const ReviewList = ({plants}) => {
    const [reviews, setReviews] = useState([]);
    const [open, setOpen ] = useState(false);

    useEffect(()=> {
        const fetchReviews = async () => {
          try{
              const response = await fetch("/reviews")
              if (!response.ok) throw Error('Error receiving data')
              const reviewList = await response.json()
              setReviews(reviewList)
          }catch(err){
              console.log(err.message)
          }finally{
          }
        }
        fetchReviews()
      }, [])

      const reviewList = reviews.slice(-3).map((review) => (
        <Review review={review} key={review.id}/>
      ));

      return (
        <Container sx={{marginTop:"100px"}}>
            <h2 className="homepage-headers">What our customers think about us</h2>
        <Grid container spacing={4}>
            {reviewList}
        </Grid>
        <Button 
          onClick={()=>{setOpen(true)}}
        >Add Review</Button>
        <AddReview plants={plants} open={open} setOpen={setOpen}/>
        </Container>
      )}

export default ReviewList;