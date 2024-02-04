import {styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton  from '@mui/material/IconButton';
import {slideInBottom, slideInRight} from '../../animations/animations'
import { Colors
 } from '../theme/MainTheme';

export const Product = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    
  
    [theme.breakpoints.up('md')]:{
        position:'relative',
   
    }
}))


export const ProductImage = styled('img')(({src, theme})=>({
    src:`url(${src})`,
    width:'100%',
    // border:`1px solid ${Colors.primary}`,
    borderRadius:"25px",
    //boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;`,
    boxShadow: `rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
    // background: Colors.primary,
    // padding:"10px",
    marginBottom:"10px",
    // transform: "scale3d(1.05, 1.05, 1)",
    [theme.breakpoints.up('md')]:{
   
        width:'80%',
        // padding:'10px',
        // border:`1px solid ${Colors.primary}`,
   
    }
}))

export const ProductActionButton = styled(IconButton)(({theme})=>({
 
    margin:4,
    [theme.breakpoints.up("md")]: {
   
        color:"white",
        background:Colors.fourth,

        '&:hover':{       
            background:Colors.primary
          
        }

    }
    
 
 
    
}))

export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isfav'
})(({isfav, theme})=>({
  
    color: isfav ? Colors.secondary : Colors.third,
    [theme.breakpoints.up("md")]: {
       
    }
}))

export const ProductAddToCart = styled(Button,{
    shouldForwardProp: (prop) => prop !== 'show'
    })(({show, theme})=>({
    "&:hover":{
        background:Colors.fourth,
        color:Colors.primary,
        transform: "scale3d(1.05, 1.05, 1)"
    },
    width:'120px',
    fontSize:'12px',
    color:Colors.white,
    fontFamily:"Flower",
    marginBottom:0,
    [theme.breakpoints.up('md')]:{
        borderBottomLeftRadius:"25px",
        borderBottomRightRadius:"25px",
     
       
        position:'absolute',
        bottom:'2%',
        width:'300px',
        padding:'10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    },

    background: Colors.fourth,
    opacity:0.9
}))

export const ProductMetaWrapper = styled(Box)(({theme}) =>({
    padding: 4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
    
}))
export const ProductActionsWrapper = styled(Box,{
    shouldForwardProp: (prop) => prop !== 'show'
})(({show, theme}) =>({
    [theme.breakpoints.up('md')]:{
        display: show ? 'visible' : 'none',
        backgroundColor:"transparent",
        position:'absolute',
        right:"10%",
        top:'3%',
        // animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    }
}))