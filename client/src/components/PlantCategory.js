import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlantCard from "./PlantCard";

import styles from "../styles/PlantCategory.module.css"
import CategoryHeaders from "./CategoryHeader";


export default function PlantCategory({plantFilter, plantCategory}){
    
    console.log(plantFilter)
    const featured_plants = plantFilter.map((plant) => (
        <PlantCard  xs={4}  plant={plant} key={plant.id}/>
   ));
    return(
 
    <div className={styles.main}> 
    <CategoryHeaders plantCategory={plantCategory}/>
    {/* <div className={styles.container}>
        <h1 className={styles.header}>anthurium</h1>
        <h3>noun</h3>



    </div> 
   <div className={styles.pronunciation}>an-thoor-ee-uhm</div> 
   <div className={styles.definition}>any of a genus (Anthurium) of tropical American plants of the arum family with large often brightly colored leaves, a cylindrical spadix, and a colored spathe</div> */}
   <Container sx={{marginTop:"75px"}}>
   <Grid container>
   {featured_plants}

   </Grid>
   </Container>
   
  
    </div>


   )
}
