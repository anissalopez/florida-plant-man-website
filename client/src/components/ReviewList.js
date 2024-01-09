import React, {useEffect, useState } from "react";
import Review from "./Review";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ReviewList = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=> {
        const fetchReviews = async () => {
          try{
              const response = await fetch("/reviews")
              if (!response.ok) throw Error('Error receiving data')
              const reviewList = await response.json()
              setReviews(reviewList)
              // setFetchError(null)
          }catch(err){
              // setFetchError(err.message)
              console.log(err.message)
          }finally{
              // setIsLoading(false);
          }
        }
        fetchReviews()
      }, [])
      const reviewList = reviews.map((review) => (
        <Review xs={4} review={review} key={review.id}/>
      ));
      

      return (
        <Container>
            <h2 className="homepage-headers">Reviews</h2>
        <Grid container spacing={4}>
            {reviewList}
        </Grid>
        </Container>
      )
      

}

export default ReviewList;