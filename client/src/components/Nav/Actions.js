import { NavList, ActionsDesktop, ActionsMobile } from "../../styles/Nav/Nav.styles";
import { Colors } from "../../styles/theme/MainTheme";

import ListItemButton  from "@mui/material/ListItemButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function Actions({matches}){

    const Component = matches ? ActionsMobile : ActionsDesktop
    return(
        <Component>
            <NavList type="row" 
                sx={{ color:matches ? Colors.white : Colors.secondary,
                    '& .MuiButtonBase-root':{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"

                    }
                 }}>
                <ListItemButton>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </ListItemButton>
                <ListItemButton>
                    <FavoriteIcon></FavoriteIcon>
                </ListItemButton>
                <ListItemButton>
                    <PersonIcon></PersonIcon>
                </ListItemButton>
            </NavList>
        </Component>
    );
};