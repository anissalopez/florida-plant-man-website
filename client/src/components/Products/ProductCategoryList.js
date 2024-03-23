import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { addCartItem  } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import ProductCategoryHeaders from "./ProductCategoryHeader";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import ProductFilterContainer from "./ProductFilterContainer";
import { Colors } from "../../styles/theme/MainTheme";


export default function ProductCategoryList({ plants } ){   
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const { category } = useParams();
  
    const [sort, setSort] = useState("");
    const [filtered_plant, setFilter] = useState("");

    const dispatch = useDispatch();

    useEffect(()=>{
        setFilter(category)
    }, [category]);


    const addToCart = (e, id, method) => {
        const qty = e.target.value; 
    
        dispatch(addCartItem(id, qty));
        
      };

    const filteredPlants = plants.sort(function(a,b){       
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
        if(filtered_plant === 'all'){
            return true
        }
        if(filtered_plant === 'All Plants'){
            return true
        }
        return null}).map( plant => (
        <Grid item xs={12} sm={6} md={4} key={plant.id} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            { matches ? <SingleProduct plant={plant} 
                            matches={matches} addToCart={addToCart}/> : 
                        <SingleProductDesktop addToCart={addToCart} plant={plant} 
                        matches={matches} />
            } 
        </Grid>))
    


 
    return(
    <Container sx={{ marginBottom:"200px", pr:5}}>
        {
            category === 'all' ? 
                <ProductFilterContainer matches={matches} 
                                    setFilter={setFilter} 
                                    setSort={setSort} plants={plants}/> 
                                    : 
                <ProductCategoryHeaders plantCategory={category}/> 
        }
        <Grid container  sx={{marginTop:"10px",
                             '& .alert':{
                                fontSize:"25px",
                                marginLeft:"20px",
                               color:Colors.secondary
                            
                             }}}  spacing = {matches ? 6 : 3}>
            {
                filteredPlants.length  ? 
                    filteredPlants : 
                    <Grid item xs={12} className='alert' >
                        Sorry we do not have any <span>{category} </span>
                        plants at this moment. Please check again next week.
                    </Grid>
           }
        </Grid>
   </Container>
   );
};
