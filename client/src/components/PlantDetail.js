import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';

import PlantBanner from "./PlantBanner";
import Loading from "./Loading"

import styles from "../styles/PlantDetail.module.css";





function PlantDetail({ setFetchError, setIsLoading, isLoading, fetchError}) {
  const { id } = useParams();
  const [plant, setPlant] = useState('');
  const [mainImg, setMainImg] = useState('')
  const [img, setImg] = useState('')
  
  
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
        }
      }
        fetchPlant()
  }, [id]);

 const handleClick = (e) => {
   console.log(e.target.src)
    setMainImg(e.target.src)
 }

  
  return (
    <>
    {isLoading && <Loading />}
    {!fetchError && !isLoading &&
    <div>
    <div>
      <Grid sx={{height:"600px",justifyContent:"center", alignItems:"center", mt:"150px"}} 
      container> 
       <Grid  item xs={2}>
          <Box className={styles.sideimgs}>
              <Box><img  onClick={handleClick} src={plant.image1} alt={plant.name}/></Box>
              <Box><img  onClick={handleClick} src={plant.image2} alt={plant.name}/></Box>
              <Box><img  onClick={handleClick} src={plant.image3} alt={plant.name}/></Box>
              
          </Box>
      
        </Grid> 
        <Grid item xs={4}>
          <Box className={styles["main-plant-image"]}>
            <Box >
              <img  alt="displayPlant" src={mainImg} />
            </Box>

          </Box>
       
        </Grid> 
        <Grid  item xs={4}>
          <Box className={styles["plant-info"]} >
            <Box>
              <h2>{plant.name}</h2>
            </Box>
           
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
              <h3>$ {plant.price}</h3>
              <Button className={styles.button}>Add to Cart</Button>
            </Box>
        </Grid>
     </Grid> 
      </div>
      <PlantBanner plant={plant}/>
    </div>
    }
    </>
  );
}

export default PlantDetail;