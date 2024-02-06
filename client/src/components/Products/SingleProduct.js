import { Link } from "react-router-dom";

import { useMediaQuery } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import Stack from "@mui/material/Stack";

import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";
import { handleClick } from "../AppVariables/appVariables";

export default function SingleProduct({plant, mediaQuery, matches}){
    function handleClic(e){
        console.log(e)
    }
    console.log(plant)
    return(
 
     <>
       <Link style={{textDecoration:'none'}} 
                to={`/plants/${plant.id}`} 
                key={plant.id}
                onClick={handleClic}> 
            <Product>
                <ProductImage src={plant.image1}></ProductImage>
                <ProductMeta matches={matches} product={plant} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isfav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="secondary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenIcon color="secondary" />
                        </ProductActionButton>
                    </Stack> 
                </ProductActionsWrapper>
            </Product>
           
        </Link>   
        <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
        </>
    
    )};