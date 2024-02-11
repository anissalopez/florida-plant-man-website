import React, {useEffect, useState } from "react";
import Review from "./Review";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddReview from "./AddReview";
import { Colors } from "../../styles/theme/MainTheme";

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

      console.log(reviews)

      return (
        <Container sx={{marginTop:"50px"}}>
            <h2 className="homepage-headers">What our customers think about us</h2>
          <Grid container spacing={2}>
              {reviewList}
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
              color:Colors.primary
            }}
          >Add Review</Button>
          </Box>
          <AddReview reviews={reviews} setReviews={setReviews} plants={plants} open={open} setOpen={setOpen}/>
        </Container>
      )}

export default ReviewList;