import React, {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import NavDrawer from './NavDrawer';
import { MainDiv } from '../../styles/Header.styles';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';


export default function Nav() {
    const [state, setState] = useState({
        left: false
      });

      const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('xl'))
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };

  return (
    <div >

      {matches ? <NavMobile matches={matches} toggleDrawer={toggleDrawer}/> : <NavDesktop matches={matches}  />}

      {
       <NavDrawer  toggleDrawer={toggleDrawer} state={state} setState={setState}></NavDrawer>/* <AppBar sx={{backgroundColor:"#233017", height:"100px", boxShawdow:"0", justifyContent:"center"}}>
        <Toolbar>
            <Box sx={{flexGrow:1}}>
              <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{  color:"#f1f1f1" }}
                  onClick={toggleDrawer("left", true)}>
                <MenuRoundedIcon />
              </IconButton>
            </Box>
            <IconButton size="small" edge="start" sx={{color:"#f1f1f1"}}>
              <p>The Florida Plant Man </p>
            </IconButton>
            <IconButton  sx={{color:"#f1f1f1" }}>
              <ShoppingCartIcon />
            </IconButton>
           
        </Toolbar>
      </AppBar> */}
      </div>
  )};
