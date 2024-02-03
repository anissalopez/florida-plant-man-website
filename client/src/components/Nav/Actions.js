import { NavList, ActionsDesktop, ActionsMobile } from "../../styles/Nav/Nav.styles";
import { Colors } from "../../styles/theme/MainTheme";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon  from "@mui/material/ListItemIcon";
import ListItemButton  from "@mui/material/ListItemButton";


export default function Actions({matches}){

    const Component = matches ? ActionsMobile : ActionsDesktop
    return(
        <Component>
            <NavList>
                <ListItemButton sx={{justifyContent:"center"}}>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center', color:matches ? Colors.white : Colors.secondary}}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </ListItemIcon>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center', color:matches ? Colors.white : Colors.secondary}}>
                        <FavoriteIcon></FavoriteIcon>
                    </ListItemIcon>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center', color:matches ? Colors.white : Colors.secondary}}>
                        <PersonIcon></PersonIcon>
                    </ListItemIcon>
                </ListItemButton>
            </NavList>
        </Component>
    )};