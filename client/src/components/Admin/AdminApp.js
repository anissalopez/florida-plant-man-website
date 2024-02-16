import {useState} from 'react';
import { Outlet, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import { styled,  } from '@mui/material/styles';
import { DrawerWidth } from '../../styles/theme/MainTheme';

import AdminDrawer from './AdminDrawer';
import Dashboard from './Dashboard';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${DrawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );


export default function AdminApp(){
    const [open, setOpen] = useState(true);
    const { pathname } = useLocation();
    return(               
        <Box sx={{display:"flex"}}>
            <AdminDrawer open={open} setOpen={setOpen} />
            <Main open={open} >
                <div style={{height:"20px"}}/>
                {
                  pathname === '/admin' && <Dashboard />
                }
                <Outlet />
            </Main>
        </Box>
     );
};