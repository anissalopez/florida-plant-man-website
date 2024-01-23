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
    width:"75vw",
    color:"#377E30",
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

        "&:hover":{
            backgroundColor:"#377E30"
        }
    }
})

export const FormInput= styled(TextField)({
    //     "& .helper":{
    //     letterSpacing:".3rem",
    //     fontFamily:"Flowers",
    //     color:"#6DC01E"
    //    },
       '& .label':{
        color:'#377E30',
        fontFamily:'Flower',
       },
       '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: '#BED500'
            },
            '&:hover fieldset': {
                borderColor: '#6DC01E',
            },
            '&.Mui-focused fieldset': {
            borderColor: '#6DC01E',
            color:'white'
            }
    }
    //    "& .input-style.MuiTextField-root:focused":{
    //     color:"#6DC01E",
    //     border:"solid 1px #6DC01E"
      
        
    //    },
    //    "& .inputs.Mui-focused":{
    //     border:"solid 1px #6DC01E",
    //     color: "#6DC01E"

    //    },
    //    "& .label":{
       
    //     color: "#6DC01E"

    //    }


  



})



