import { styled } from '@mui/system';
import Box from '@mui/material/Box';


export const InfoContainer = styled(Box)({
    display: "flex",
    marginTop:"150px",

})

export const ShopInfo = styled(Box)({
    display: "flex",
    gap:"10px", 
  
 
    "& .headers":{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#6DC01E",
        fontSize: "18px",
        height: "34px",
        color:"white",
    },
    "& .content":{
        lineHeight:"1.5em"
    }

})



//     "table":{  
//        ,
//         width: "85vw",
//     "thead":{
//         backgroundColor: "#6DC01E",
//         fontSize: "18px",
//         height: "34px",
//         textAlign: "center",
//         color:"white",
//         width:"300px",
//         top: "0px",
//         "tr td":{
//             borderRadius:"3px",
//             width: "350px",
//             ":hover": {
//                 backgroundColor: "#377E30"
//             }
//          }
//     },
//     "tbody":{
//         padding:"15px",
//         verticalAlign: "top",
//         lineHeight:"1.2rem"
//     },
   

// },
// "@media (max-width: 600px)":{
//     flexDirection:"column"
// }});







   

