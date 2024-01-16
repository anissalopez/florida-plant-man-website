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
                    height: "600px",
             
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
                            justifyContent:"center",
                            height:"125px"
                            }}>
                   
                        <CardContent sx={{marginBottom:"20px"}}>
                                <Typography sx={{fontSize:"larger", fontFamily: "Flower"}}>
                                    {plant.name}
                                </Typography>   
                        </CardContent>
                        </Box>
                 
                </Link>
                <Box sx={{
                        display: "flex",
                       justifyContent:"space-between",
                     
                      
                       
                       
                     
                        
                    }}>
                       

                     
                        
                     
                          

                            <div  style={{display:"flex", alignSelf:"flex-end", fontSize:"24px"}}>${plant.price}</div>
                            <Button sx={{
                                display:"flex",
                             
                                backgroundColor: "#BED500",
                                border: "#BED500",
                                color:"black",
                                fontFamily: "Flower",
                                marginRight:"20px"
                               }}>
                                Add to Cart
                            </Button>
                      
                        </Box>
                   
            </Card>  
        </Grid>
    )};

  