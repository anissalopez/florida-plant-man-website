import * as React from 'react';
import FeaturedPlant from "./FeaturedPlant";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function FeaturedPlantList({plants, handlePlantDetail}){
    const featured_plants = plants.slice(-4).map((plant) => (
         <FeaturedPlant xs={3} handlePlantDetail={handlePlantDetail} plant={plant} key={plant.id}/>
    ));
    return(
        <Container>
            <h2 className="homepage-headers">Featured Plants</h2>
        <Grid container spacing={3}>
            {featured_plants}
        </Grid>
        </Container>
    )
}

export default FeaturedPlantList;