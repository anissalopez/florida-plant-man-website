import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import ProductCategoryHeaders from "./ProductCategoryHeader";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { ClientAlert } from "../../styles/Products/Products.styles";
import { Colors } from "../../styles/theme/MainTheme";



export default function ProductCategoryList({ plants } ){   
    const { category } = useParams();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const filteredPlants = plants.filter((plant)=>{
        return plant.name.toLowerCase().includes(category)
    }).map( plant => (
   
        <Grid item xs={12} sm={6} md={4} key={plant.id} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
           {matches ? <SingleProduct plant={plant} matches={matches}/> : <SingleProductDesktop plant={plant} matches={matches} />} 
        </Grid>
    ));

    
    return(
    <Container sx={{ marginBottom:"200px", pr:5}}>
      <ProductCategoryHeaders plantCategory={category}/>
        <Grid container  sx={{marginTop:"10px",
                             '& .alert':{
                                fontSize:"24px",
                                marginLeft:"20px",
                               fontFamily:`Chalkduster`
                             }}}  spacing = {matches ? 6 : 3}>
            {filteredPlants.length  ? filteredPlants : 
            <div className='alert' >
                Sorry we do not have any <span>{category} </span>
                plants at this moment. Please check again next week.
            </div>}
        </Grid>
   </Container>
   )};
