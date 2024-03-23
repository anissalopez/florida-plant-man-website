import { useState } from "react";

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import Stack from "@mui/material/Stack";

import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme/MainTheme";


export default function SingleProductDesktop({plant, matches}){
    const dispatch = useDispatch();
    
    const [show, setShow] = useState(false);
    

    const handleMouseEnter = () =>{
        setShow(true);
    };

    const handleMouseExit = () =>{
        setShow(false);
    };


    return(  
        <> 
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}> 
                <ProductImage src={plant.image1}></ProductImage>
                    {
                        show && <ProductAddToCart show={show} onClick={()=>dispatch(addCartItem(plant.id))}  >
                                Add to Cart
                                </ProductAddToCart> 
                    }
                    <ProductActionsWrapper show={show}>
                        <Stack direction="column">
                            <ProductFavButton isfav={0} >
                                <FavoriteIcon />
                            </ProductFavButton>
                            <ProductActionButton>
                                <ShareIcon sx={{color:Colors.white}} />
                            </ProductActionButton>
                            <ProductActionButton>
                                <FitScreenIcon sx={{color:Colors.white}} />
                            </ProductActionButton>
                        </Stack> 
                </ProductActionsWrapper>
            </Product>
            <Link 
              style={{textDecoration:'none'}} 
              to={`/plants/${plant.id}`} 
              key={plant.id}> 
            <ProductMeta matches={matches} product={plant} />
        </Link> 
    </>
    );
};