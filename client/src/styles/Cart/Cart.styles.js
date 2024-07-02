import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';



export const Product = styled(Box)(({ theme })=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        position:'relative',  
    }
}));
export const ProductImage = styled('img')(({ src, theme })=>({
    src:`url(${src})`,
    width:'100%',
    borderRadius:"25px",
    boxShadow: `rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
    marginBottom:"10px",
    [theme.breakpoints.up('md')]:{
        width:'80%',
    }
}));