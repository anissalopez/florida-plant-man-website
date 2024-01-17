import React, { useState } from 'react';

import PlantCard from "./PlantCard";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from "../styles/AllPlants.module.css";


export default function AllPlants({plants, handlePlantDetail}){
    const [sort, setSort] = useState("")
    const [filtered_plant, setFilter] = useState("")
   
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
        <Container className={styles.container}>
            <h1  className={styles.header}>All Plants</h1>
            <div className={styles['button-container']}>
                {
                ['All Plants','Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium'].map((category)=>{
                    return(<Button key={category} onClick={(e)=>setFilter(e.target.textContent)}>{category}</Button>

                
                    
                    )}
                        
                 
                )}
             
             </div>
            <Divider sx={{marginTop:"40px"}}/>
            <Box className={styles["sort-container"]}>

                <div>
                    <label>
                        <span>sortBy</span>
                        <span></span>
                        <select onChange={(e)=>setSort(e.target.value)}>
                            <option >Featured</option>
                            <option >Alphabetically, A-Z</option>
                            <option>Alphabetically, Z-A</option>
                            <option>Price, low to high</option>
                            <option>Price, high to low</option>
                        </select>
                    </label>
                </div>

            </Box>
            <Grid sx={{marginTop:"50px"}} container spacing={3} >
                    {featured_plants}      
            </Grid>
        </Container>
    )};

