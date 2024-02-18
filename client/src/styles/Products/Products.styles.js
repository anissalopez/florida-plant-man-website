import {styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
        background:Colors.primary,
        // color:Colors.primary,
        transform: "scale3d(1.05, 1.05, 1)"
    },
    width:'50%',
    fontSize:'12px',
    color:Colors.white,
    fontFamily:"Flower",
    marginBottom:0,
    [theme.breakpoints.up('md')]:{
        // borderBottomLeftRadius:"25px",
        // borderBottomRightRadius:"25px",
        position:'absolute',
        bottom:'2%',
        width:'50%',
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
    
}));

export const AccordionWrapper = styled(Grid,{
    shouldForwardProp: (prop) => prop !== 'show'
    })(({theme}) =>({
    ".MuiAccordionSummary-content":{
        fontFamily:"Flower"
    },
    display:"flex",
    justifyContent:"center", 
    alignItems:"center",
    marginTop:"50px",

    "& .MuiAccordion-root":{
        backgroundColor:Colors.white2,
        fontSize:"1.2rem",
        boxShadow:"none",

    },
    marginBottom:"75px"   
}));


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
    height: "750px",
    width:"100%",
    flexDirection: "column",
    justifyContent:"space-between",
    // marginLeft:"20px",
 
    "div":{
      width:"100%",
      color: Colors.fifth,
      display: "flex",
      alignItems: "center",    
   },
   "h2":{
      color: Colors.secondary,
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
        backgroundColor: Colors.fourth,
        color: Colors.primary,
        width: "400px",
        fontFamily: "Flower",
        borderRadius: "3px",
       "&:hover":{
          backgroundColor:Colors.fifth,
          color:"#fff"
       }
   }});

export const InfoContainer = styled(Box)({
    display: "flex",
    marginTop:"75px"

});

export const ShopInfo = styled(Box)({
    display: "flex",
    gap:"10px", 
    marginTop:"75px",
    ml:"80px",
    mr:"20px",
    mt:"75px",
    mb:"75px",

    "& .headers":{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: Colors.fifth,
        borderRadius:"5px",
        fontSize: "18px",
        height: "34px",
        color:"white",
    },
    "& .content":{
        lineHeight:"1.5em"
    }

});

export const HeaderContainer = styled('div')({
    marginTop:"75px",
    marginBottom:"75px",
    

     
    '& .main-content':{
        marginTop:"50px",
        display: "inline-flex",
        gap: "15px",
        alignItems: "baseline" 

    },
    '& .category':{
        fontSize:"50px",
        height:"50px"

    },
    '& .noun':{
        color: Colors.secondary,
        fontSize: "40px",
        fontWeight: "bold",
        height:"50px"
    },
    '& .definition':{
        fontSize:"25px",
        width:"75vw"
    },
    '& .pronunciation':{
        color: Colors.fifth,
        fontSize:"20px",
        fontWeight:"bold",
        marginBottom:"15px",
        marginTop:"15px"

    },
    '& .client-alert':{
        textAlign:'center',
        padding:"32px",
        color:"red"

    }
});


export const FilterHeader = styled('h1')({
    color:"#000",
    fontFamily:"Flower",   
    marginTop:"75px",
    marginBottom:"60px",
});

export const ProductDetailGridItem = styled(Grid)({
    display:"flex",
    justifyContent:"center", 
    alignItems:"center"
});

export const ButtonFilter = styled(Button)({
    color:"#fff",
    backgroundColor: Colors.fourth,
    fontFamily: "Flower",
    border: `solid 1px ${Colors.fourth}`,
    width:"130px",
    '&:hover':{
        backgroundColor:Colors.secondary,
        border: Colors.secondary
    }
});

