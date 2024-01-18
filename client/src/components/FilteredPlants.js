import Grid from "@mui/material/Grid";

import PlantCard from "./PlantCard";

export default function FilteredPlants({plants, sort, filtered_plant}){
    
    const filtered_plants = plants.sort(function(a,b){       
        if (sort === 'Alphabetically, A-Z'){
            if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                    return 0}
        if(sort === "Price, low to high"){
                return a.price - b.price
            }
        if(sort === 'Price, high to low'){
            return b.price - a.price
            }
    
        if (sort === 'Alphabetically, Z-A'){
            if(a.name > b.name){
                return -1
                }
            if(a.name < b.name){
                return 1
                }
            return 0
            }
    }).filter((plant)=>{
        if(plant.name.toLowerCase().includes(filtered_plant.toLowerCase())){
 
            return plant
        }
        if(filtered_plant === 'All Plants'){
            return true
        }
    })


    const featured_plants = filtered_plants.map((plant) => (
        <PlantCard  xs={4}  plant={plant} key={plant.id}/>
   ));



    return(
        <Grid sx={{marginTop:"50px"}} container spacing={3} >
        {featured_plants}      
        </Grid>
    )

}