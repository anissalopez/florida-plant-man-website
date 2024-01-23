import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const ExploreButton = styled(Button)({
        position: "absolute",
        top: "50%",
        left: "50%" ,
        transform: "translate(-50%, -50%)",
        backgroundColor: "#6DC01E",
        color: "#fff",
        padding: "10px 20px",
        fontSize: "20px",
        textAlign: "center",
        fontFamily:"Flower",
        "&:Hover":{
            backgroundColor:"#377E30",
            color:"fff"
        }
})
