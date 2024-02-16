import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {ThreeDots} from 'react-loading-icons';
import SimpleImageSlider from "react-simple-image-slider";

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
import { PlantContent, ProductDetailGridItem } from '../../styles/Products/Products.styles';
import { Colors } from "../../styles/theme/MainTheme";

import PlantInfoBanner from "./ProductInfoBanner";


function PlantDetail({ setFetchError}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [plant, setPlant] = useState('');
  const [images, setImages] = useState([]);

  const theme = useTheme();

  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderWidth = smScreen ? 350 : 500
  const sliderHeight = smScreen ? 400 : 600


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
       {
          loading ?  <ThreeDots stroke={Colors.secondary} /> :
                <ProductDetailGridItem sx={{mt:"70px"}} gap={2} container> 
                  <ProductDetailGridItem item md={12} lg={5.5}>
                      <SimpleImageSlider
                          width={sliderWidth}
                          height={sliderHeight}
                          images={images}
                          showBullets={true}
                          showNavs={true}  
                        /> 
                    </ProductDetailGridItem> 
                    <ProductDetailGridItem item md={12} lg={5.5}>
                      <PlantContent>
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
                  </ProductDetailGridItem>
              </ProductDetailGridItem>     
      }
        <PlantInfoBanner plant={plant}/>
     </Container>   
  );
};

export default PlantDetail;