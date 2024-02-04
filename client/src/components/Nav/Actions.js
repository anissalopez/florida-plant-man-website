import { NavList, ActionsDesktop, ActionsMobile } from "../../styles/Nav/Nav.styles";
import { Colors } from "../../styles/theme/MainTheme";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon  from "@mui/material/ListItemIcon";
import ListItemButton  from "@mui/material/ListItemButton";
import { ListItem } from "@mui/material";


export default function Actions({matches}){

    const Component = matches ? ActionsMobile : ActionsDesktop
    return(
        <Component>
            <NavList type="row" sx={{ color:matches ? Colors.white : Colors.secondary}}>
                <ListItemButton sx={{justifyContent:"center"}}>
                    
                        <ShoppingCartIcon></ShoppingCartIcon>
              
               </ListItemButton>
               <ListItemButton sx={{justifyContent:"center"}}>
                   
                        <FavoriteIcon></FavoriteIcon>
                   
                </ListItemButton>
                <ListItemButton sx={{justifyContent:"center"}}>
                   
                        <PersonIcon></PersonIcon>

                </ListItemButton>
            </NavList>
        </Component>
    )};