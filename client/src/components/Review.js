import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

const Review = ({ review }) => {
    return (
        <Grid item xs={4}>
        <Card sx={{
              backgroundColor: "#f1f1f1",
              boxShadow: 0,
              height: "600px"
        }}>
            <Rating name="read-only" value={review.rating} readOnly />
                <Box sx={{display:"flex", flexDirection:"row", 
                        justifyContent:"center"
                        }}>
                    <CardContent sx={{marginBottom:0}}>
                            <Typography sx={{fontSize:"larger", fontFamily: "Flower"}}>
                                {review.comment}
                            </Typography>   
                    </CardContent>
                </Box>  
        </Card>  
        </Grid>
    )};
  export default Review;
  