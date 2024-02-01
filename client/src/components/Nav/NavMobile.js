import IconButton from "@mui/material/IconButton";
import ListItemButton  from "@mui/material/ListItemButton";
import ListItemIcon  from "@mui/material/ListItemIcon";
import { NavList, NavHeader } from "../../styles/Nav.styles";

import Actions from "./Actions";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import {Colors} from "../../styles/theme/MainTheme"




export default function NavMobile({matches}){

    return(
        <NavList type="row" >
            <IconButton  sx={{color:Colors.primary}}>
                <MenuRoundedIcon sx={{color:Colors.primary}}/>
            </IconButton>
            <NavHeader textAlign={"center"} variant="h2">
                The Florida Plant Man
            </NavHeader>
            <IconButton>
                <SearchIcon sx={{color:Colors.primary}}/>
            </IconButton>
            <Actions matches={matches}></Actions>
        </NavList>
    )
}