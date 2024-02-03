import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme/MainTheme";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";




export default function Products({plants}){
    console.log(plants)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const renderPlants = plants.map( plant => (
        <Grid item xs={12} sm={6} md={4} key={plant.id} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
           {matches ? <SingleProduct product={plant} matches={matches}/> : <SingleProductDesktop product={plant} matches={matches} />} 
        </Grid>

    ))


    return(
        <Container >
        <Box sx={{display:"flex", justifyContent:"center", p:4}}>
        <Typography variant="h3" sx={{ textAlign:"center", fontFamily:"Flower", color:Colors.primary}}>Featured Plants</Typography>
        </Box>
        <Grid container
        // spacing={{xs: 2, md:3}}
        spacing = {matches ? 6 : 3}
  
      
        // justifyContent:"center"

        >
            {renderPlants}
        </Grid>
        <></>
        </Container>
       

    )


}