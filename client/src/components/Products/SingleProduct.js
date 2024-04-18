import { useDispatch } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import Stack from "@mui/material/Stack";

import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";


export default function SingleProduct({plant, matches }){
    const dispatch = useDispatch();
 
    return(
        <>
            <Product>
                <ProductImage src={plant.image1}></ProductImage>
                <ProductMeta matches={matches} product={plant} />
            </Product>   
            <ProductAddToCart onClick={() => dispatch(addCartItem(plant.id))} variant="contained">Add to Cart</ProductAddToCart>
    </>  
    )
}