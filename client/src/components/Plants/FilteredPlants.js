import Grid from "@mui/material/Grid";
import PlantCard from "./PlantCard";

export default function FilteredPlants({plants, sort, filtered_plant}){ 
    const filter = plants.sort(function(a,b){       
        if (sort === 'Alphabetically, A-Z'){
            if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                    return 0
        }
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
        return null
        }).filter((plant)=>{
        if(plant.name.toLowerCase().includes(filtered_plant.toLowerCase())){
            return plant
        }
        if(filtered_plant === 'All Plants'){
            return true
        }
        return null
    })
    
    const featured_plants = filter.map((plant) => (
        <PlantCard  plant={plant} key={plant.id}/>
   ));

    return(
        <Grid sx={{marginTop:"50px"}} container spacing={3} >
            {
               featured_plants.length ? featured_plants :
               <div>
                Sorry we do not have any {filtered_plant} plants at this time. 
                Please check again next week.
               </div>
            }
        </Grid>
    )};