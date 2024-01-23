import { styled } from '@mui/system';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";


export const CardComponent = styled(Card)({
    backgroundColor:"#f1f1f1",
    boxShadow:"none",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)"}
})

export const ButtonComponent = styled(Button)({
    backgroundColor: "#BED500",
    border: "#BED500", 
    color:"#000",
    fontFamily:"Flower", 
    marginTop:"20px",
    '&:hover':{
        backgroundColor:"#377E30",
        border: "solid #377E30",
        color:"#fff"
    }})