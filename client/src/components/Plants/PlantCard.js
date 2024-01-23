import * as React from 'react';
import { Link } from "react-router-dom";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

import {CardComponent, ButtonComponent} from "../../styles/PlantCard.style"

export default function PlantCard({ plant }){
    return (
        <Grid item xs={12} sm={4}>
            <CardComponent>
                <Link style={{textDecoration:'none', color: 'black'}} 
                        to={`/plants/${plant.id}`} 
                        key={plant.id}> 
                    <CardMedia
                        component="img"
                        alt="featured plant"
                        image={plant.image1}
                        sx={{borderRadius: 3, height:"500px"}}
                    />
                        <Box sx={{display:"flex", flexDirection:"row", 
                            justifyContent:"center",
                            height:"74px"
                            }}>
                            <CardContent sx={{marginBottom:"20px"}}>
                                <Typography sx={{fontSize:"larger", fontFamily: "Flower"}}>
                                        {plant.name}
                                </Typography>   
                            </CardContent>
                        </Box>
                </Link>
                <Box sx={{display:"flex", flexDirection:"row", 
                            justifyContent:"center",textAlign:"center"
                            }}>
                        <CardContent sx={{marginBottom:"20px"}}>
                            <Typography sx={{fontSize:"larger"}}>
                                ${plant.price}
                            </Typography>   
                            <ButtonComponent >
                                Add to Cart
                            </ButtonComponent>
                        </CardContent>
                </Box>
            </CardComponent>
        </Grid>
    )};

  