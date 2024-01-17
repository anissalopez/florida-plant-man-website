import React, {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TemporaryDrawer from './Sidebar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import image from '../images/logo.png';
import { Typography } from '@mui/material';


export default function Nav({handlePlantNav}) {
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
      <AppBar sx={{backgroundColor: "#f1f1f1"}}>
        <Toolbar>
            <Box sx={{flexGrow:1}}>
            {/* <IconButton>
              <img style={{display:"flex"}}src={image} alt="company logo" width="50px"  ></img>
              </IconButton> */}
              
              <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{  color:"#377E30" }}
                  onClick={toggleDrawer("left", true)}>
              <MenuRoundedIcon />
              </IconButton>
              
              
          </Box>
          <Box sx={{textAlign:"center"}}>
          <p>The Florida Plant Man </p>
          </Box>
          
          <IconButton  sx={{color:"#377E30" }}>
          <ShoppingCartIcon />
          </IconButton>
          <TemporaryDrawer handlePlantNav={handlePlantNav} toggleDrawer={toggleDrawer} state={state} setState={setState}></TemporaryDrawer>
        </Toolbar>
      </AppBar>
  )};
