import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Colors } from "./theme/MainTheme";
import { List } from "@mui/material";

export const NavContainer = styled(Box)({
    display:"flex",
    marginTop:4,
    justifyContent:"center",
    alignItems:"center",
    padding:"2px 8px",
   
    color:Colors.primary,
    "& a":{
        textDecoration:"none",
        color:Colors.primary,
  
    }
})


export const NavHeader = styled(Typography)({
    padding:"4px",
    flexGrow:1,
    fontSize:"2rem",
    fontFamily:'Flower',
    color:Colors.secondary
})

export const NavList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent:'center',
    alignItems:'center',
 
   

}))


export const ActionsDesktop = styled(Box)({
    flexGrow:0,
})

export const ActionsMobile = styled(Box)({
    display:"flex",
    background:Colors.secondary,
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
    alignItems:"center",
    zIndex:99,
    borderTop:`1px solid ${Colors.secondary}`
})




