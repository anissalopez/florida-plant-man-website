import { useState } from "react";

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../actions/cartActions';


import { Product,ProductAddToCart, ProductImage } from "../../styles/Products/Products.styles";
import ProductMeta from "./ProductMeta";
import { Link } from "react-router-dom";



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
        {/* <Link 
              style={{textDecoration:'none'}} 
              to={show ? `/plants/${plant.id}` : null} 
              key={plant.id}>  */}
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}> 
                <ProductImage src={plant.image1}></ProductImage>
                    {
                        show && <ProductAddToCart show={show} 
                                   onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(addCartItem(plant.id));
                                    }}  
                                >
                                Add to Cart
                                </ProductAddToCart> 
                    }
            </Product>
            
            <ProductMeta matches={matches} product={plant} />
        {/* </Link>  */}
    </>
    );
};