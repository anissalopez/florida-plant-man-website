import Actions from "./Actions";

import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';

import { NavList, NavHeader } from "../../styles/Nav/Nav.styles";

import { Colors } from "../../styles/theme/MainTheme"

export default function NavMobile({ matches, toggleCartDrawer, toggleDrawer, cartDrawerState }){
    return(
        <NavList type="row" >
            <IconButton  sx={{color:Colors.primary}}  onClick={toggleDrawer("left", true)}>
                <MenuRoundedIcon sx={{color:Colors.primary}}/>
            </IconButton>
            <NavHeader textAlign={"center"} variant="h2">
                The Florida Plant Man
            </NavHeader>
            <IconButton>
                <SearchIcon sx={{color:Colors.primary}}/>
            </IconButton>
            <Actions cartDrawerState={cartDrawerState} toggleCartDrawer={toggleCartDrawer} matches={matches}></Actions>
        </NavList>
    );
};