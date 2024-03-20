import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { ProductMetaWrapper } from "../../styles/Products/Products.styles";
import { Colors } from "../../styles/theme/MainTheme";

export default function ProductMeta({product, matches}){  
    return(
       
        <ProductMetaWrapper>
                <Typography 
                    sx={{ color:Colors.secondary, 
                            textAlign:"center", 
                            overflow:"hidden"
                        }}
                    variant={matches ? 'h6' : 'h5'} 
                    lineheight={2}
                >
                    {product.name}
                </Typography>
                <Typography sx={{fontSize:"24px", color:Colors.primary, textAlign:"center"}}lineheight={2}>
                    ${product.price}
                </Typography>  
        </ProductMetaWrapper>
        
    );
};