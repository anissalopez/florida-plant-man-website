import * as React from 'react';

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { ReviewContainer, ReviewName} from '../../styles/Review.style';

const Review = ({ review }) => {
    return (
        <Grid item xs={12} sm={4}>             
            <ReviewContainer>
                <Box>
                    <Rating name="read-only" value={review.rating} size="large"
                                sx={{color: "#6DC01E"}}
                        readOnly />
                    <h3 >{review.comment}</h3>
                    <ReviewName>- {review.customer['first_name']}    {review.customer['last_name']}</ReviewName>
                </Box>
             </ReviewContainer>
        </Grid>
    )};
  export default Review;
  