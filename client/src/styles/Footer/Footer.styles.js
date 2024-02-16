import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

export const FooterTitle =styled(Typography)(()=>({
    textTransform:'uppercase',
    marginBottom:'1em',
    fontFamily:"Flower",
    fontSize:"30px"
}));


export const ListItemTypography =styled(Typography)(()=>({
    fontFamily:'Monaco', 
    fontSize:{xs:"16px", md:"16px",lg:"20px"},
    lineHeight:2
}));
;

