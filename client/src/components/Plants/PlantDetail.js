import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import { ImageContainer1, ImageContainer2, PlantContent} from '../../styles/PlantDetail.styles';

import PlantInfoBanner from "./PlantInfoBanner";
import Loading from "../Loading"
import ReviewList from "../Reviews/ReviewList";

function PlantDetail({ setFetchError, setIsLoading, isLoading, fetchError}) {
  const { id } = useParams();
  const [plant, setPlant] = useState('');
  const [mainImg, setMainImg] = useState('');

  useEffect(() => {
    const fetchPlant = async () => {
        try{
            const response = await fetch(`/plants/${id}`)
            if (!response.ok) throw Error('Error receiving data')
            const plantData = await response.json()
            setPlant(plantData)
            
            setMainImg(plantData.image1)
            setFetchError(null)
        }catch(err){
            setFetchError(err.message)
        }finally{
            setIsLoading(false);
        };
      };
        fetchPlant();
  }, [id]);

 const handleClick = (e) => {
    setMainImg(e.target.src);
 }
console.log(mainImg)
  
  return (
    <>
    {isLoading && <Loading />}
    {!fetchError && !isLoading &&
    <Box>

      <Grid sx={{ mt:"150px", alignItems:"center", justifyContent:"center"}}  
      container> 
        <Grid  item xs={12} sm={2}>
            <ImageContainer1 >
                <Box><img className={mainImg === plant.image1 ? "active": null} onClick={handleClick} src={plant.image1} alt={plant.name}/></Box>
                <Box><img className={mainImg === plant.image2 ? "active": null} onClick={handleClick} src={plant.image2} alt={plant.name}/></Box>
                <Box><img  className={mainImg === plant.image3 ? "active": null} onClick={handleClick} src={plant.image3} alt={plant.name}/></Box>   
            </ImageContainer1>
          </Grid> 
          <Grid item sm={5} xs={12} >
            <ImageContainer2>
              <Box>
                <img  alt="displayPlant" src={mainImg} />
              </Box>
            </ImageContainer2>
          </Grid> 
          <Grid item sm={4} xs={12}>
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

      <Container>
      <PlantInfoBanner plant={plant}/>

      </Container>



    
      <ReviewList />
     </Box>
     }
    </>
  )};

export default PlantDetail;