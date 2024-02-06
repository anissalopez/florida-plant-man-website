import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Colors } from "../theme/MainTheme";
import {styled} from "@mui/material/styles";


export const PromotionsContainer = styled(Box)(({ theme })=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0px 20px 0px',
    overflow:'hidden',
    background: Colors.secondary
}));

export const Message = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('md')]:{
        fontSize:'3rem'
    },
    color: Colors.white,
    fontSize:"1.5rem"
}));