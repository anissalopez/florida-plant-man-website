import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Colors } from "../theme/MainTheme";
import theme from "../theme/MainTheme";

export const BannerContainer = styled(Box)(({theme})=>({
    display:"flex",
    width:"100%",
    height:"100%",
    padding:"0px 0px",
    color:Colors.primary,
    background: Colors.third,
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
        alignItems:"center",
        background: Colors.light_gray
    }
}));

export const BannerContent = styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    maxWidth:"600px",
    [theme.breakpoints.down('md')]:{
        maxWidth:"420px"
    },
    padding:"30px"
});

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight:1.25,
    letterSpacing:1.5,
    fontSize:'64px',
    marginBottom:'20px',
    fontFamily:"Flower",
    [theme.breakpoints.down('sm')]:{
        fontSize:'42px'
    },
    [theme.breakpoints.down('md')]:{
        fontSize:'42px'
    }
}));

export const BannerDescription = styled(Typography)(({theme})=>({
    lineHeight:1.25,
    letterSpacing:1.15,
    marginBottom:'3em',
    fontSize:"32px",
    color:Colors.secondary,
    fontWeight:"bold",
    [theme.breakpoints.down('md')]:{
        lineHeight:1.15,
        letterSpacing:1.15,
        marginBottom:'1.5em',
    }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width:"50%",
    [theme.breakpoints.down('md')]:{
        width:"350px"
    },
    [theme.breakpoints.down('sm')]:{
        width:"100%",
        objectFit:"cover",
        height:"300px"
    }
}));

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'color',
    name:"MyShopButton",
    slot:"root",
    overridesResolver:(props, styles) =>[
        styles.root,
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary
    ],
})(({theme})=>({
    padding: "20px 0px",
    color:Colors.white,
    fontWeight:'bold',
    fontSize:'16px',
    [theme.breakpoints.down('sm')]:{
        padding: "10px 0px",
        fontSize:"14px"
    }
}));