import { useDispatch } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';


import { Product,  ProductAddToCart, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";


export default function SingleProduct({plant, matches }){
    const dispatch = useDispatch();
 
    return(
        <>
            <Product>
                <ProductImage src={plant.image1} width="200" height="200"></ProductImage>
                <ProductMeta matches={matches} product={plant} />
            </Product>   
            <ProductAddToCart onClick={() => dispatch(addCartItem(plant.id))} variant="contained">Add to Cart</ProductAddToCart>
        </>  
    )
}