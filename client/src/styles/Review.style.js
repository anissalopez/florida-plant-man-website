import { styled } from '@mui/system';
import Box from '@mui/material/Box'


export const ReviewContainer = styled(Box)({
    display:"flex",
    justifyContent: "space-between",
    height:"350px",
    border: "solid 2px #377E30",
    borderRadius:"10px",
    lineHeight: "35px",
    padding:"20px",
    marginBottom:"60px",
    overflow:"hidden",

    ":hover":{ 
        transform: "scale3d(1.05, 1.05, 1)"
        },
    "div":{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        textAlign:"center",
        alignItems: "center"
    } 
})

export const ReviewName = styled('h3')({
    marginTop:"auto",
    marginBottom: "0",
    fontStyle:"italic"
})





