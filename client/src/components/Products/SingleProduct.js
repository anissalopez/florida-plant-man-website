import { useMediaQuery } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";
import Link from "@mui/material";
import Stack from "@mui/material/Stack";
import Share from "@mui/icons-material/Share";


export default function SingleProduct({product, mediaQuery, matches}){
    return(
     
        // <Link style={{textDecoration:'none'}} 
        // to={`/plants/${plant.id}`} 
        // key={plant.id}> 
        <>
        <Product>
            <ProductImage src={product.image1}></ProductImage>
            <ProductMeta matches={matches} product={product}>

            </ProductMeta>
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
        <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
        </>
        // </Link>
     
        
    )

}