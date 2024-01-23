import { styled } from '@mui/system';
import Box from '@mui/material/Box';


export const AddReviewContainer = styled(Box)({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    "button":{
        backgroundColor:"#6DC01E",
        color:"#fff",
        fontFamily:"Flower",
        letterSpacing:".2rem",
        ":hover":{
            backgroundColor:"#377E30",
            color:"#fff"
        }
    }
})