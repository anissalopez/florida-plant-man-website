import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import { Colors } from '../../styles/theme/MainTheme';

import Appbar from './Appbar';
import NavMenu from './NavMenu';
import DrawerHeader from './DrawerHeader';


export default function AdminDrawer({open, setOpen}) {

  return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
            <Appbar open={open} setOpen={setOpen} />
              <Drawer
                sx={{
                  width: 240,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor:Colors.admingreen1
                }}}
                variant="persistent"
                anchor="left"
                open={open}
                >
                  <DrawerHeader setOpen={setOpen} />
                    <Divider />
                    <NavMenu />  
              </Drawer>  
        </Box>
  );
};
