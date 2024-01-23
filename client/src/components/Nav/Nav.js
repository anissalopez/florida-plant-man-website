import React, {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import NavDrawer from './NavDrawer';


export default function Nav() {
    const [state, setState] = useState({
        left: false
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };

  return (
      <AppBar sx={{backgroundColor:"#f1f1f1"}}>
        <Toolbar>
            <Box sx={{flexGrow:1}}>
              <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{  color:"#6DC01E" }}
                  onClick={toggleDrawer("left", true)}>
                <MenuRoundedIcon />
              </IconButton>
            </Box>
            <IconButton size="small" edge="start" sx={{color:"#6DC01E"}}>
              <p>The Florida Plant Man </p>
            </IconButton>
            <IconButton  sx={{color:"#6DC01E" }}>
              <ShoppingCartIcon />
            </IconButton>
            <NavDrawer  toggleDrawer={toggleDrawer} state={state} setState={setState}></NavDrawer>
        </Toolbar>
      </AppBar>
  )};
