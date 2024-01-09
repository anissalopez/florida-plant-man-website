import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

const Review = ({ review }) => {
    return (
        <Grid item xs={3}>
        <Card sx={{
              backgroundColor: "#f1f1f1",
              boxShadow: 0,
              height: "300px",
              border: "solid 2px #377E30",
              borderRadius: 3,
              alignContent:"center",
              padding: "10px"
             
        }}>
            <Box sx={{display:"flex", justifyContent:'center'}}>
                <Rating name="read-only" value={review.rating} size="large"
                        sx={{color: "#6DC01E"}}
                readOnly />
            </Box>   
            <CardContent sx={{marginBottom:0, display:"flex", 
                            justifyContent:"center"}}>
                <Typography sx={{fontSize:"larger", 
                                fontFamily: "Sometype Mono, monospace" }}>
                {review.comment}
                </Typography>   
            </CardContent>
              
        </Card>  
        </Grid>
    )};
  export default Review;
  