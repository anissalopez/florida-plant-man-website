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

export default function PlantCard({ plant, xs }){
    return (
        <Grid item xs={xs}>
            <Card
                sx={{
                    backgroundColor: "#f1f1f1",
                    boxShadow: 0,
                    height: "800px",
                   
                 
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
                            height:"500px"
                        }}
                    />
                        <Box sx={{display:"flex", flexDirection:"row", 
                            justifyContent:"center",
                            height:"90px"
                            }}>
                            <CardContent sx={{marginBottom:"20px"}}>
                                    <Typography sx={{fontSize:"larger", fontFamily: "Flower"}}>
                                        {plant.name}
                                    </Typography>   
                            </CardContent>
                        </Box>
                </Link>
                <Box sx={{textAlign:"center"}}>
                            <div style={{fontSize:"20px"}}>${plant.price}</div>
                            <Button sx={{
                                backgroundColor: "#BED500",
                                border: "#BED500",
                                color:"black",
                                fontFamily: "Flower",
                                marginTop:"20px"
                               }}>
                                Add to Cart
                            </Button>
                        </Box>
            </Card>  
        </Grid>
    )};

  