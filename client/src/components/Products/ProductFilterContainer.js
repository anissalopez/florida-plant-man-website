import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { FilterHeader, ButtonFilter } from '../../styles/Products/Products.styles';

export default function PlantContainer({ setSort, setFilter, matches }){

    return(
        <Container sx={{textAlign:"center"}}>
            <FilterHeader>All Plants</FilterHeader>
            {matches ? null : 
                  <Box sx={{display:"flex", justifyContent:"center", gap:"40px", alignItems:"center",flexDirection: { xs: "column", md: "row" }}}>
                  {
                  ['All Plants','Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium'].map((category)=>{
                      return(<ButtonFilter key={category} onClick={(e)=>setFilter(e.target.textContent)}>{category}</ButtonFilter>
                      )} 
                  )}        
              </Box>
            }
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
        </Container>
    )};

