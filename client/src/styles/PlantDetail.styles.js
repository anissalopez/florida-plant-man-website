import { styled } from '@mui/system';
import Box from "@mui/material/Box";

export const ImageContainer1 = styled(Box)({
    height:"700px",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",  
   "@media (max-width:600px)":{
      height:"100%"
   }, 
   "& .active":{
      opacity:".5"

   },
    "div":{
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      height:"33%",
      boxSizing:"border-box",
      padding:"5px",
      width:"100%",
      "img":{
          height:"100%",
          width:"90%",
          borderRadius:"5px",

          "@media (max-width:600px)":{
            width:"100%"
          } 
      }
    }
})

export const ImageContainer2 = styled(Box)({
  height:"700px",
  width:"100%",
  display:"flex",
  "@media (max-width:600px)":{
      height:"100%",  
   },
  

  "div":{
     height:"100%",
     boxSizing:"border-box",
     padding:"5px",

  "img":{
      height:"100%",
      width:"100%",
      objectFit:"cover",
      borderRadius:"5px",
    },
 
  }
})

export const PlantContent = styled(Box)({
      display: "flex",
      height: "700px",
      width:"100%",
      flexDirection: "column",
      justifyContent: "space-between",
      marginLeft:"20px",
      "div":{
        width:"100%",
        color: "#6DC01E",
        display: "flex",
        alignItems: "center",    
     },
     "h2":{
        color: "#377E30",
        fontFamily: "Flower"

     },
     "p":{
        color: "black",
        fontSize: "1.2rem",
        marginLeft: "1.2rem"
     },
     "h3":{
      color:"#000"
        
     },
     "button":{
          backgroundColor: "#BED500",
          color: "#000",
          width: "40%",
          fontFamily: "Flower",
          borderRadius: "3px",
         "&:hover":{
            backgroundColor:"#377E30",
            color:"#fff"
         }
     }})
