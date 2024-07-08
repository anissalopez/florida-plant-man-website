import {  useSelector } from 'react-redux';

import { NavList, ActionsDesktop, ActionsMobile } from "../../styles/Nav/Nav.styles";
import { Colors } from "../../styles/theme/MainTheme";

import ListItemButton  from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Actions({matches, toggleCartDrawer, cartDrawerState}){
    console.log(cartDrawerState)
    
    const cart = useSelector((state) => state.cart)
  

    const Component = matches ? ActionsMobile : ActionsDesktop
    return(
        <Component>
            <NavList type="row" 
                sx={{ color:matches ? Colors.white : Colors.secondary,
                    '& .MuiButtonBase-root':{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                       
                    }
                 }}>
                <ListItemButton onClick={toggleCartDrawer(!cartDrawerState)}>
                    <Badge badgeContent={cart ? cart.items.total_items: null }>
                    <ShoppingCartIcon ></ShoppingCartIcon>
                    </Badge>
                </ListItemButton>
            </NavList>
        </Component>
    );
};