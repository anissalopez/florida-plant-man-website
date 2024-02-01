import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

export const FormBox = styled(Box)({

    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    "& h2":{
        fontFamily:"Flower",
        letterSpacing:".2rem"
    },
    "& .label":{
       fontFamily: 'Sometype Mono'
    },
    "& .menu":{
        fontFamily:"Sometype Mono",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"#377E30"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline":{
            borderColor:"#377E30"

        },
        "& .Mui-focused .MuiOutlinedInput-root":{
            borderColor:"#377E30"

        },
        "& .Mui-hover .MuiOutlinedInput-root":{
            borderColor:"#377E30"

        },
    },
  
    "& .MuiSelect-icon":{
        color:"#377E30"

    },
})

export const SelectMenu = styled(Select)({
    color:"#377E30",
    "& .menu-items":{
        color:"#377E30"
    },
    "& .MuiOutlinedInput-notchedOutline":{
        borderColor:"#377E30",
        "& .Mui-focused":{
            borderColor:"#377E30 !important"

        },
        "&:hover fieldset":{
            
    },

    "& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
        borderColor:"#377E30 !important"
    }

   
}
    

})