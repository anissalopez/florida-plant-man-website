import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Card  from "@mui/material/Card";
import  CardMedia  from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function PlantDetail({}) {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [displayImg, setDisplayImg] = useState(plant ? plant.image1 : null)
  const [plantImages, setPlantImages] = useState([])

  useEffect(() => {
    const fetchPlant = async () => {
      try{
          const response = await fetch(`/plants/${id}`)
          if (!response.ok) throw Error('Error receiving data')
          const plantData = await response.json()
          setPlant(plantData)
          setPlantImages([plantData.image1, plantData.image2, plantData.image3])
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
  console.log(plant.name)

  
  return (
    <>
    {plant ? 
      <Grid container  spacing={0}>
        <Box  sx={{marginLeft:"40px", border:1}} xs={4}>
          <Card  sx={{backgroundColor: "#f1f1f1"}}>
            {plantImages.map((image) => (
              <CardMedia component="img" alt="featured plant" image={image} key={image}
                          sx={{
                                height:"200px",
                                padding:"10px",
                            }}/>
            ))}      
          </Card>
       </Box>
       <Box sx={{border:1}} xs={4}>
          <Card sx={{backgroundColor: "#f1f1f1"}}>
            <CardMedia
                        component="img"
                        alt="featured plant"
                        image={plant.image1}
                        sx={{
                            height:"600px",
                            padding: "10px"
                        }}
                    />
            </Card>
       </Box>
       <Box>
        <Card>
          <CardContent>
            <Typography variant="h1">
              {plant.name}
            </Typography>
          </CardContent>
        </Card>
       </Box>
      </Grid>
     : null}
      </>
  );
}

export default PlantDetail;