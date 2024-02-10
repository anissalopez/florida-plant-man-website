import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Colors } from '../../styles/theme/MainTheme';

import Appbar from './Appbar';
import NavMenu from './NavMenu';
import DrawerHeader from './DrawerHeader';

const drawerWidth = 240;


export default function AdminDrawer({open, setOpen}) {
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
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        <NavMenu />  
      </Drawer>  
    </Box>
  );
}
