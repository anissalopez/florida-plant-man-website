import * as React from 'react';

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import styles from "../styles/Review.module.css";

const Review = ({ review }) => {
    return (
        <Grid item xs={3}>             
            <Box className={styles.container}>
                <Box >
                    <Rating name="read-only" value={review.rating} size="large"
                                sx={{color: "#6DC01E"}}
                        readOnly />
                    <h3 className={styles.comment}>{review.comment}</h3>
                    <h3 className={styles.name}>- {review.customer['first_name']}    {review.customer['last_name']}</h3>
                </Box>
             </Box>
        </Grid>
    )};
  export default Review;
  