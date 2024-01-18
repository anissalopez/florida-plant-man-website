import * as React from 'react';
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';

const CardComponent = styled(Card)({
    backgroundColor:"#f1f1f1",
    boxShadow:"none",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)"}
})

const ButtonComponent = styled(Button)({
    backgroundColor: "#BED500",
    border: "#BED500", 
    color:"#000",
    fontFamily:"Flower", 
    marginTop:"20px",
    '&:hover':{
        backgroundColor:"#377E30",
        border: "solid #377E30",
        color:"#fff"
    }
    


})

export default function PlantCard({ plant, xs }){
    return (
        <Grid item xs={xs}>
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

  