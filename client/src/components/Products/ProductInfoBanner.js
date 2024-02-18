import Grid from "@mui/material/Grid";
import { shopGuarantee, shippingPolicy, returnPolicy } from "./productVariables";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionWrapper } from "../../styles/Products/Products.styles";


export default function PlantInfoBanner() {
  return (
    <AccordionWrapper container>
      <Grid item xs={12} md={11}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Shop Guarantee
            </AccordionSummary>
            <AccordionDetails>
              {shopGuarantee}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Shipping Policy
            </AccordionSummary>
            <AccordionDetails>
              {shippingPolicy}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Return Policy 
            </AccordionSummary>
            <AccordionDetails>
            {returnPolicy}
            </AccordionDetails>
          </Accordion>
      </Grid>
    </AccordionWrapper>

  );
};






// const PlantInfoBanner = () => {
//     return(
//             <ShopInfo sx={{flexDirection:{xs:"column", md:"row-reverse"}}}>
//                 <Box className="info-container">
//                     <Box className="headers">Shop Guarantee</Box>
//                     <Box className="content">{shopGuarantee}</Box>
//                 </Box>
//                 <Box>
//                     <Box className="headers">Shipping</Box>
//                     <Box className="content">{shippingPolicy}</Box>
//                 </Box>
//                 <Box>
//                     <Box className="headers">Return Policy</Box>
//                     <Box className="content">{returnPolicy}</Box>
//                 </Box>
//                 </ShopInfo>   
     
//     );
// };

// export default PlantInfoBanner;
