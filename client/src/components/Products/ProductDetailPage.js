import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import {ThreeDots} from 'react-loading-icons';
import SimpleImageSlider from "react-simple-image-slider";


import { useLoadingContenxt } from "../../context/Loading";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { PlantContent } from '../../styles/Products/Products.styles';

import PlantInfoBanner from "./ProductInfoBanner";
import ReviewList from "../Reviews/ReviewList";

import { Colors } from "../../styles/theme/MainTheme";

function PlantDetail({ setFetchError}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [plant, setPlant] = useState('');
  const [images, setImages] = useState([])

  const theme = useTheme();

  const xlScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const sliderWidth = xlScreen ? 600 : mdScreen ? 400 : 700;


  useEffect(() => {
    const fetchPlant = async () => {
        try{
            const response = await fetch(`/plants/${id}`);
            if (!response.ok){
              throw Error('Error receiving data');
            }

            const plantData = await response.json();
            setPlant(plantData);
            const imagesArray = [plantData.image1, plantData.image2, plantData.image3];
            setImages(imagesArray);
            setLoading(false);
            
            setFetchError(null)
        }catch(err){
            setFetchError(err.message);
        };
      };
        fetchPlant();
  }, [id]);

 

  return (
    <Container maxWidth="xl">

      <Grid sx={{ mt:"70px", alignItems:"center", justifyContent:"center"}}  
      container> 
          <Grid item md={12} lg={6} sx={{display:"flex", justifyContent:"center", p:4}} >
            {loading?  <ThreeDots stroke={Colors.secondary} /> : 
            <SimpleImageSlider
                width={sliderWidth}
                height={800}
                images={images}
                showBullets={true}
                showNavs={true}
                
              />
            }
          </Grid> 
          <Grid item md={12} lg={6} >
            <PlantContent >
              <Box> 
                <h2>{plant.name}</h2>
              </Box>
              <Box><h3>{plant.description}</h3></Box>  
              <Divider></Divider> 
              <Box>
                  <WbSunnyIcon />
                  <p>{plant.sun}</p>
              </Box>
              <Box>
                  <WaterDropIcon />
                  <p>{plant.water}</p>
              </Box>
              <Box>
                  <StraightenIcon />
                  <p>4 inch pot</p>
              </Box>
              <Box>
                <h3> ${plant.price}</h3>
              </Box>
              <Box><Button >Add to Cart</Button></Box> 
            </PlantContent>
          </Grid>
     </Grid> 
      <PlantInfoBanner plant={plant}/>
      <ReviewList />
     </Container>   
  )};

export default PlantDetail;