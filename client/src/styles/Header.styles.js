import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import image from '../images/background_image.webp'


export const MainDiv = styled('div')({


        

        // width:"100vw",
        // height:"100vh",
        // width:"100vw",
        // background-position: center top;
        // backgroundSize: "100% 100%",
        // height:"600px",
        
    
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
       
        backgroundColor:"#233017",

        '& .right':{
            width:"50%",
            "& img":{
                borderRadius:"10px"
               
            },
        },
        '& .left':{
            // paddingTop:"300px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width:"50%",
            textAlign:"left",
            color:"white",
            "& h1":{
                fontSize:"60px"

            }
        }
        
        
        
        // justifyContent: "center",
        // minHeight: "100vh",
        // width:"100%",
    
  /* padding: 30px;
  margin: 0;  */
  
        
    
})

export const ExploreButton = styled(Button)({
        // position: "absolute",
        // top: "50%",
        // left: "50%" ,
        // transform: "translate(-50%, -50%)",
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
