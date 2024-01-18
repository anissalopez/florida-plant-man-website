import * as React from 'react';

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import styles from "../styles/Review.module.css"

const Review = ({ review }) => {
    return (
        <Grid item xs={3}>
        {/* <Card sx={{
              backgroundColor: "#f1f1f1",
              boxShadow: 0,
              height: "400px",
              border: "solid 2px #377E30",
              borderRadius: 3,
              padding: "10px",
             
             
        }}> */}
            {/* <Box sx={{textAlign:"center", lineHeight:3}}> */}
                
            <Box className={styles.container}>
         

            <Box sx={{height:"85%"}}>

            
            <Rating name="read-only" value={review.rating} size="large"
                        sx={{color: "#6DC01E"}}
                readOnly />
         

            
                <h3>{review.comment}</h3>
           </Box>
            
              

         
               <h3 className={styles.name}>- {review.customer['first_name']}    {review.customer['last_name']}</h3>
             
          
        </Box>
         
            {/* </Box>    */}
              
     
        </Grid>
    )};
  export default Review;
  