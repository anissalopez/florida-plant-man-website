import Typography from "@mui/material/Typography";
import { ProductMetaWrapper } from "../../styles/Products/Products.styles";
import { Colors } from "../../styles/theme/MainTheme";


export default function ProductMeta({product, matches}){
    
    return(
        <ProductMetaWrapper>
            <Typography sx={{ color:Colors.secondary, textAlign:"center", overflow:"hidden"}}variant={matches ? 'h6' : 'h5'} lineheight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body1'} lineheight={2}>
                ${product.price}
            </Typography>
            {/* <Typography variant={matches ? 'caption' : 'body1'} lineheight={2}>
                ${product.price}
            </Typography> */}
            
        </ProductMetaWrapper>
    )
}