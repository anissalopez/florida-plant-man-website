import React, {useState} from 'react';

import NavDrawer from './NavDrawer';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



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

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'))
  
    return (
      <div >
        {matches ? 
        <NavMobile matches={matches} toggleDrawer={toggleDrawer}/> : 
        <NavDesktop matches={matches}  />}
     
      <NavDrawer toggleDrawer={toggleDrawer} 
                 state={state} setState={setState} />
      </div>
    )};
  /* <AppBar sx={{backgroundColor:"#233017", height:"100px", boxShawdow:"0", justifyContent:"center"}}>
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
        </AppBar> */
      

