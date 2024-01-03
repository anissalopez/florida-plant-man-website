import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TemporaryDrawer from './Sidebar';
import image from '../images/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ButtonAppBar() {
    const [state, setState] = React.useState({
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
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{  color:"#377E30" }}
                onClick={toggleDrawer("left", true)}
            >
                <MenuRoundedIcon />
            </IconButton>
            <img src={image} alt="company logo" width="50px"  ></img>
          </Box>
          <IconButton size="large" sx={{color:"#377E30" }}>
            <ShoppingCartIcon />
          </IconButton>
        <TemporaryDrawer toggleDrawer={toggleDrawer} state={state} setState={setState}></TemporaryDrawer>
        </Toolbar>
      </AppBar>
  );
}
