import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Card  from "@mui/material/Card";
import  CardMedia  from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function PlantDetail({ plants }) {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);


  useEffect(() => {
    const fetchPlant = async () => {
      try{
          const response = await fetch(`/plants/${id}`)
          if (!response.ok) throw Error('Error receiving data')
          const plantData = await response.json()
          setPlant(plantData)
        
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
    {plant ? 
      <Grid container>
      <Grid item sx={{border:1}} xs={4}>
          <Card sx={{backgroundColor: "#f1f1f1", height:"500px", width: "350px"}}>
            <CardMedia
                        component="img"
                        alt="featured plant"
                        src={plant.image1}
                        sx={{
                            height:"150px",
                            padding: "10px"
                        }}
                    />   
                 <CardMedia
                        component="img"
                        alt="featured plant"
                        src={plant.image1}
                        sx={{
                            height:"150px",
                            padding: "10px"
                        }}
                    />   
                 <CardMedia
                        component="img"
                        alt="featured plant"
                        src={plant.image1}
                        sx={{
                            
                            height:"150px",
                            padding: "10px"
                        }}
                    />   
            </Card>
            
       </Grid>
       <Grid item sx={{border:1}} xs={4}>
          <Card sx={{backgroundColor: "#f1f1f1", height: "500px", width:"350px"}}>
            <CardMedia
                        component="img"
                        alt="featured plant"
                        src={plant.image1}
                        sx={{
                            height: "500px",
                            padding: "10px"
                        }}
                    />
            </Card>
       </Grid>
       <Box>
        <Card>
          <CardContent>
            <Typography variant="h1">
             
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