import React, { useState } from 'react';

import PlantCard from "./PlantCard";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import PlantHeader from './PlantHeader';
import styles from "../styles/AllPlants.module.css";


export default function FeaturedPlantList({plants, handlePlantDetail}){
    const [sort, setSort] = useState(plants)
   


    const filtered_plants = plants.sort(function(a,b){
                
        if (sort === 'Alphabetically, A-Z' || sort === "Price, low to high"){
        if(a.name > b.name || a.price > a.price){
                    return 1
                }
                if(a.name < b.name || a.price < b.price){
                    return -1
                }
                return 0}
            

        if (sort === 'Alphabetically, Z-A' || sort === 'Price, high to low'){
                return a.name < b.name || a.price < b.price ? -1 : 1
              
            }


         
        })
     


    const featured_plants = filtered_plants.map((plant) => (
            <PlantCard  xs={4} handlePlantDetail={handlePlantDetail} plant={plant} key={plant.id}/>
       ));
    return(
        <Container className={styles.container}>
            <h1  className={styles.header}>All Plants</h1>
                <Box className={styles["sort-container"]}>
                {/* <div >Sort By:</div>
                <div className={styles.featured} onClick={()=> setDisplay(!display)}>Featured</div>
             {display ? 
                      <div className={styles["sort-list"]}>
                      <div>Featured </div>
                      <div>Alphabetically, A-Z</div>
                      <div>Alphabetically, Z-A</div>
                      <div>Price, low to high </div>
                      <div>Price, high to low</div>
                  </div> :
                  null
             } */}

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
              

        
                
      
            <Divider sx={{height:"50px" }}/>
            
            
            <Grid className={styles["plant-list"]} container spacing={3} >
                    {featured_plants}      
            </Grid>
        </Container>
    )};

