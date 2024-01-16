import * as React from 'react';

import PlantCard from "./PlantCard";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PlantHeader from './PlantHeader';


export default function FeaturedPlantList({plants, handlePlantDetail}){
    const featured_plants = plants.map((plant) => (
         <PlantCard  xs={3} handlePlantDetail={handlePlantDetail} plant={plant} key={plant.id}/>
    ));
    return(
        <div >
            <PlantHeader text="All Plants" className="homepage-headers" />
            
            <Grid container spacing={2} >
                <Grid item xs={3}>
                    <div style={{vh:"100", backgroundColor:"000"}}> 

                    </div>

                    </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={2}>
                    {featured_plants}   

                    </Grid>
                

                </Grid>
                     
            </Grid>
        </div>
    )};

