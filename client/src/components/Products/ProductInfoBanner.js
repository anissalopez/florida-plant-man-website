import { ShopInfo } from "../../styles/Products/Products.styles";
import Box from "@mui/material/Box";
import { shopGuarantee, shippingPolicy, returnPolicy } from "./productVariables";


const PlantInfoBanner = () => {
    return(
            <ShopInfo sx={{flexDirection:{xs:"column", md:"row-reverse"}}}>
                <Box className="info-container">
                    <Box className="headers">Shop Guarantee</Box>
                    <Box className="content">{shopGuarantee}</Box>
                </Box>
                <Box>
                    <Box className="headers">Shipping</Box>
                    <Box className="content">{shippingPolicy}</Box>
                </Box>
                <Box>
                    <Box className="headers">Return Policy</Box>
                    <Box className="content">{returnPolicy}</Box>
                </Box>
                </ShopInfo>   
     
    );
};

export default PlantInfoBanner;
