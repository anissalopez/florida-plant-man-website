import { styled } from '@mui/system';
import Box from '@mui/material/Box';

import  TextField  from '@mui/material/TextField';

export const FormContainer = styled(Box)({
    display:"flex", 
    gap:"20px", 
    justifyContent:"center", 
    flexDirection:"column",
    alignItems:"center",
    alignContent:"center",
    color:"#000",
    fontFamily:"Flower",
    "& .form-components":{
        display:"flex", 
        flexDirection:"column", 
        gap:"20px",
        marginBottom:"50px",
        marginTop:"50px"
    },
    "& .next-button":{
        backgroundColor:"#BED500",
        color:"#fff",
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"70px",

        "&:hover":{
            backgroundColor:"#377E30"
        }
    },
    "& .cancel-button":{
        backgroundColor:"red",
        color:"#fff",
        fontFamily: "Flower",
        letterSpacing:".2rem",
        marginTop:"20px",
        width:"70px",

      
    }
})

export const FormInput= styled(TextField)({
       '& .label.MuiFormLabel-root':{
        color:'#000',
        fontFamily:'Flower',
            '&:shrink':{
                color:'#377E30'
            },
            '&:focused':
            {
                color:'#377E30'
            },
            '&:active':{
                color:'#377E30'
            },
       },
       '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: '#377E30'
            },
            '&:hover fieldset': {
                borderColor: '#BED500',
            },
            '&.Mui-focused fieldset': {
            borderColor: '#BED500',
            color:'white'
            }
    }
 


  



})



