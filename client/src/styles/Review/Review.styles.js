import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import  TextField  from '@mui/material/TextField';

import { Colors } from '../theme/MainTheme';
import theme from "../theme/MainTheme";

export const FormContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center", 
    flexDirection:"column",
   
    "& .form-components":{
        display:"flex", 
        flexDirection:"column", 
        gap:"30px",
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
export const ButtonContainer = styled(Box)({
    display:"flex", 
    justifyContent:'space-between',
    marginTop:"20px",
    "& .next-button":{
        backgroundColor:Colors.secondary,
        color:"#fff",
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"100px",

        "&:hover":{
            backgroundColor:Colors.primary
        }
    },
    "& .cancel-button":{
        backgroundColor:"red",
        color:Colors.black,
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"100px",   
        "&:hover":{
            backgroundColor:"red",
        }
    }
  
});

export const CustomerFormInput= styled(TextField)({
       '& .label.MuiFormLabel-root':{
        color:'#000',
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
});

export const ReviewHeader = styled('h1')({
    fontFamily:"Flower",
    color:Colors.primary,
    textAlign:"center", marginBottom:"40px",
    fontSize:"3rem"
});

export const ReviewContainer = styled(Box)({
    display:"flex",
    justifyContent: "space-between",
    flexDirection:"column",
    textAlign:"center",
    alignItems: "center",

    height:"350px",
    border: "solid 2px #377E30",
    borderRadius:"20px",
    lineHeight: "35px",
    padding:"20px",
    marginBottom:"60px",
    overflow:"hidden",
    [theme.breakpoints.down('md')]:{
       fontSize:"14px",
    },

    ":hover":{ 
        transform: "scale3d(1.05, 1.05, 1)"
        },
 
});

export const ReviewName = styled('h3')({
    marginTop:"auto",
    marginBottom: "0",
    fontStyle:"italic"
});









