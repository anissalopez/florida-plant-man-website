import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import  TextField  from '@mui/material/TextField';

import { Colors } from '../theme/MainTheme';
import theme from "../theme/MainTheme";


export const FormContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center", 
    flexDirection:"column",
    gap:"10px",
   
    "& .form-components":{
        display:"flex", 
        flexDirection:"column", 
        gap:"20px",
        // marginBottom:"50px",
        // marginTop:"50px"
    },
    '& label':{
        fontFamily:"Flower",
        fontSize:"22px",
        color:Colors.black,
        [theme.breakpoints.down('md')]:{
            fontSize:"14px"

        }
    },
    "& .next-button":{
        backgroundColor:Colors.secondary,
        color:"#fff",
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"100px",

        "&:hover":{
            backgroundColor:Colors.secondary
        }
    },
    "& .cancel-button":{
        backgroundColor:"red",
        color:Colors.black,
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"100px",   
    }
  
})

export const CustomerFormInput= styled(TextField)({
       '& .label.MuiFormLabel-root':{
        color:'#000',
        // fontFamily:'Flower',
        '&:shrink':{
                color:Colors.primary
            },
        '&:focused':
            {
                color:Colors.primary
            },
        '&:active':{
                color:Colors.primary
            },
       },
       '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: Colors.primary
            },
            '&:hover fieldset': {
                borderColor:Colors.fourth,
            },
            '&.Mui-focused fieldset': {
            borderColor: Colors.fourth,
            color:'white'
            }
    }
})

export const ReviewContainer = styled(Box)({
    display:"flex",
    justifyContent: "space-between",
    flexDirection:"column",
    justifyContent:"space-between",
    textAlign:"center",
    alignItems: "center",

    height:"350px",
    border: "solid 2px #377E30",
    borderRadius:"20px",
    lineHeight: "35px",
    padding:"20px",
    marginBottom:"60px",
    overflow:"hidden",

    ":hover":{ 
        transform: "scale3d(1.05, 1.05, 1)"
        },
 
});

export const ReviewName = styled('h3')({
    marginTop:"auto",
    marginBottom: "0",
    fontStyle:"italic"
});









