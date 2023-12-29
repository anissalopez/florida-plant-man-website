import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import  Card  from "@mui/material/Card";
import  CardMedia  from "@mui/material/CardMedia"



function PlantDetail({}) {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [displayImg, setDisplayImg] = useState(plant ? plant.image1 : null)

  useEffect(() => {
    const fetchPlant = async () => {
      try{
          const response = await fetch(`/plants/${id}`)
          if (!response.ok) throw Error('Error receiving data')
          const plantData = await response.json()
          setPlant(plantData)
          setDisplayImg(plantData.image1)
          // setFetchError(null)
      }catch(err){
          // setFetchError(err.message)
          console.log(err.message)
      }finally{
          // setIsLoading(false);
      }
    }
    fetchPlant()
  }, [id]);


  
  return (

    <>
    {
      plant ? 
   
  
      <Grid container  spacing={0}>
      <Grid item xs={4} >
        <Box  sx={{width:"300px",
                    marginLeft:"40px"}}>

     
        <Card>
        <CardMedia
                    component="img"
                    alt="featured plant"
                    image={plant.image1}
                    sx={{
                        height:"200px",
                        padding:"10px"
                    }}
                />
                 <CardMedia
                    component="img"
                    alt="featured plant"
                    image={plant.image1}
                    sx={{
                        height:"200px",
                        padding:"10px"
                    }}
                />
                 <CardMedia
                    component="img"
                    alt="featured plant"
                    image={plant.image1}
                    sx={{
                        height:"200px",
                        padding:"10px"
                    }}
                />
        </Card>
        </Box>
      </Grid>

      <Grid item xs={4} >
        <Box>
 
      <Card>
        <CardMedia
                    component="img"
                    alt="featured plant"
                    image={plant.image1}
                    sx={{
                        height:"600px",
                      
                    }}
                />
        </Card>
        </Box>
  
      </Grid>

      </Grid>
     
     
     : null}

      </>
  );
}

export default PlantDetail;