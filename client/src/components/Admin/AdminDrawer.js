import { useState }from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Appbar from './Appbar';
import { Colors } from '../../styles/theme/MainTheme';
import NavMenu from './NavMenu';




const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  backgroundColor:Colors.admindarkblue,
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
 
}));




export default function AdminDrawer({open, setOpen}) {
  const theme = useTheme();



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:Colors.admingreen1
        }}}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
      

          <IconButton sx={{backgroundColor:Colors.admingreen1}}onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NavMenu />
       
       
      </Drawer>
     
    </Box>
  );
}
