import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";


import { useDispatch, useSelector } from 'react-redux';

import { Colors } from "../../styles/theme/MainTheme";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";




export default function Products(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const plants = useSelector((state) => state.plants)




    const renderPlants = plants.plants.map( plant => (
        <Grid item xs={12} sm={6} md={4} key={plant.id} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
           {matches ? <SingleProduct  plant={plant} matches={matches}/> : <SingleProductDesktop plant={plant} matches={matches} 
             />} 
        </Grid>
    ));

    return(
        <Container maxWidth="xl" sx={{mb:10, mt:10}}>
            <Box sx={{display:"flex", justifyContent:"center", p:4, mb:5}}>
                <Typography variant="h3" sx={{ textAlign:"center", fontFamily:"Flower", color:Colors.primary}}>Featured Plants</Typography>
            </Box>
            <Grid container
                spacing = {matches ? 6 : 3}>
                {plants ? renderPlants : null}
            </Grid>
        </Container>
    );
};