import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlantCard from "./PlantCard";


import { useParams } from "react-router-dom";


import styles from "../styles/PlantCategory.module.css"
import CategoryHeaders from "./CategoryHeader";


export default function PlantCategory({ plants} ){
    
    const { category } = useParams();

    console.log(category)

    const filteredPlants = plants.filter((plant)=>{
        return plant.name.toLowerCase().includes(category)
      })
    const featured_plants = filteredPlants.map((plant) => (
        <PlantCard  xs={4}  plant={plant} key={plant.id}/>
   ));

   console.log(plants)
    return(
 
    <div className={styles.main}> 
    <CategoryHeaders plantCategory={category}/>
  
   <Container sx={{marginTop:"75px"}}>
   <Grid container spacing={2}>
   {featured_plants.length  ? featured_plants: 
   <div>
    Sorry we do not have any <span>{category} </span>
   plants at this moment. Please check back again next week.
   </div>}

   </Grid>
   </Container>
   
  
    </div>


   )
}
