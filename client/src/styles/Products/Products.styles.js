import {styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton  from '@mui/material/IconButton';
import {slideInBottom, slideInRight} from '../../animations/animations'
import { Colors} from '../theme/MainTheme';

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

export const ProductActionButton = styled(IconButton)(({theme})=>({
 
    margin:4,
    [theme.breakpoints.up("md")]: {
        color:"white",
        background:Colors.fourth,

        '&:hover':{       
            background:Colors.primary
          
        }
    }
}));

export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isfav'
})(({isfav, theme})=>({
  
    color: isfav ? Colors.secondary : Colors.third,
    [theme.breakpoints.up("md")]: {
       
    }
}));

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
}));

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
}));

export const PlantContent = styled(Box)({
    display: "flex",
    height: "800px",
    width:"100%",
    flexDirection: "column",
    justifyContent:"space-between",
    marginLeft:"20px",
    "div":{
      width:"100%",
      color: "#6DC01E",
      display: "flex",
      alignItems: "center",    
   },
   "h2":{
      color: "#377E30",
      fontFamily: "Flower"

   },
   "p":{
      color: "black",
      fontSize: "1.2rem",
      marginLeft: "1.2rem"
   },
   "h3":{
    color:Colors.primary
      
   },
   "button":{
        backgroundColor: "#BED500",
        color: Colors.primary,
        width: "40%",
        fontFamily: "Flower",
        borderRadius: "3px",
       "&:hover":{
          backgroundColor:"#377E30",
          color:"#fff"
       }
   }});

export const InfoContainer = styled(Box)({
    display: "flex",
    marginTop:"150px",

});

export const ShopInfo = styled(Box)({
    display: "flex",
    gap:"10px", 

    "& .headers":{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#6DC01E",
        fontSize: "18px",
        height: "34px",
        color:"white",
    },
    "& .content":{
        lineHeight:"1.5em"
    }

});

export const HeaderContainer = styled('div')({
    marginTop:"25px",
    marginBottom:"25px",

     
    '& .main-content':{
        marginTop:"50px",
        display: "inline-flex",
        gap: "15px",
        alignItems: "baseline" 

    },
    '& .category':{
        color: "fff",
        fontSize:"50px",
        height:"50px"

    },
    '& .noun':{
        color: "#377E30",
        fontSize: "40px",
        fontWeight: "bold",
        height:"50px"
    },
    '& .definition':{
        fontSize:"25px",
        width:"75vw"
    },
    '& .pronunciation':{
        color: "#6DC01E",
        fontSize:"20px",
        fontWeight:"bold",
        marginBottom:"15px",
        marginTop:"15px"

    },
    '& .client-alert':{
        textAlign:'center',

    }
})

