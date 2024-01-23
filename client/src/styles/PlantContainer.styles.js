import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const HeaderComponent = styled('h1')({
    color:"#000",
    fontFamily:"Flower",   
    marginTop:"175px",
    marginBottom:"60px",
})

export const ButtonComponent = styled(Button)({
    color:"#fff",
    backgroundColor: "#BED500",
    fontFamily: "Flower",
    border: "solid 1px #BED500",
    width:"130px",
    '&:hover':{
        backgroundColor:"#377E30",
        border: "solid #377E30"
    }
})