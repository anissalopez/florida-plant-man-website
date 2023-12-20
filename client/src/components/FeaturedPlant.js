import * as React from 'react';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

function FeaturedPlant({ plant }) {
    return (
        <Card variant="outlined" color="">
            <CardMedia
                component="img"
                alt="featured plant"
                image={plant.image1}
            />
            <CardContent>
                <Box sx={{
                    display:"flex", FlexDirection:"Column", justifyContent:"space-between"}}>
                <Typography sx={{
                textAlign: "left",
                fontSize:"larger",
                fontFamily: "Flower"}}>
                    {plant.name}
                </Typography>   
                <Typography sx={{
                textAlign: "right",}}>
                    {plant.price}
                </Typography> 
                </Box>  
            </CardContent>
            <CardActions sx={{
                justifyContent: "center"
            }}>
                <Button sx={{
                     backgroundColor: "#BED500",
                     border: "#BED500",
                     color:"black",
                     fontFamily: "Flower",
                }}>
                    Add to Cart
                </Button>
            </CardActions>
            
        </Card>
      
    );
  }
  export default FeaturedPlant;
  