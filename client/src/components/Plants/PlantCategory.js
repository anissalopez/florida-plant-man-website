import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlantCard from "./PlantCard";

import CategoryHeaders from "./CategoryHeader";

export default function PlantCategory({ plants} ){   
    const { category } = useParams();

    const filteredPlants = plants.filter((plant)=>{
        return plant.name.toLowerCase().includes(category)
    });

    const featured_plants = filteredPlants.map((plant) => (
        <PlantCard  xs={4}  plant={plant} key={plant.id} />
    ));
    
    return(
    <Container sx={{marginTop:"75px"}}>
      <CategoryHeaders plantCategory={category}/>
      <Grid sx={{marginTop:"50px"}} container spacing={2}>
          {featured_plants.length  ? featured_plants: 
          <div>
            Sorry we do not have any <span>{category} </span>
          plants at this moment. Please check again next week.
          </div>}
      </Grid>
   </Container>
   )};
