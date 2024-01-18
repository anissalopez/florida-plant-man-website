import React, { useState } from 'react';


import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { styled } from '@mui/system';
import FilteredPlants from './FilteredPlants';


export default function AllPlants({ plants }){
    const [sort, setSort] = useState("")
    const [filtered_plant, setFilter] = useState("")
   
    


    const HeaderComponent = styled('h1')({
        color:"#000",
        fontFamily:"Flower",   
        marginTop:"175px",
        marginBottom:"60px",
    
    })

    const ButtonComponent = styled(Button)({
        color:"#fff",
        backgroundColor: "#BED500",
        fontFamily: "Flower",
        border: "solid 1px #BED500",
        width:"130px"

    })


    return(
        <Container sx={{textAlign:"center"}}>
            <HeaderComponent>All Plants</HeaderComponent>
            <Box sx={{display:"flex", justifyContent:"center", gap:"40px"}}>
                {
                ['All Plants','Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium'].map((category)=>{
                    return(<ButtonComponent key={category} onClick={(e)=>setFilter(e.target.textContent)}>{category}</ButtonComponent>
                    )} 
                )}
             
            </Box>
            <Divider sx={{marginTop:"40px"}}/>
            <Box sx={{display:"flex", gap:"30px", justifyContent:"right", fontSize:"20px"}}>
                <Box>
                    <label>
                        <span style={{marginRight:"5px"}}>sortBy</span>
                        <span></span>
                        <select onChange={(e)=>setSort(e.target.value)}>
                            <option >Featured</option>
                            <option >Alphabetically, A-Z</option>
                            <option>Alphabetically, Z-A</option>
                            <option>Price, low to high</option>
                            <option>Price, high to low</option>
                        </select>
                    </label>
                </Box>
            </Box>
        <FilteredPlants filtered_plant={filtered_plant} plants={plants} sort={sort} />
        </Container>
    )};

