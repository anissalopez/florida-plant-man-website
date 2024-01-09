import * as React from 'react';
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";

export default function FeaturedPlant({ plant }){
    return (
        <Grid item xs={3}>
            <Card
                sx={{
                    backgroundColor: "#f1f1f1",
                    boxShadow: 0,
                    height: "600px"
                }}>
                <Link style={{textDecoration:'none', color: 'black'}} 
                        to={`/plants/${plant.id}`} 
                        key={plant.id}> 
                    <CardMedia
                        component="img"
                        alt="featured plant"
                        image={plant.image1}
                        sx={{
                            borderRadius: 3,
                            height:"400px"
                        }}
                    />
                    <Box sx={{display:"flex", flexDirection:"row", 
                            justifyContent:"center"
                            }}>
                        <CardContent sx={{marginBottom:0}}>
                                <Typography sx={{fontSize:"larger", fontFamily: "Flower"}}>
                                    {plant.name}
                                </Typography>   
                        </CardContent>
                    </Box>  
            
                </Link>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        height: "auto"
                    }}>
                        <CardActions>
                            <Button sx={{
                                backgroundColor: "#BED500",
                                border: "#BED500",
                                color:"black",
                                fontFamily: "Flower",}}>
                                Add to Cart
                            </Button>
                        </CardActions> 
                    </Box>  
            </Card>  
        </Grid>
    )};

  