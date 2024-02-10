import {useState} from 'react';
import { Outlet } from "react-router-dom";

import Box from '@mui/material/Box';
import { Colors } from '../../styles/theme/MainTheme';
import { styled,  } from '@mui/material/styles';
import { DrawerWidth } from '../../styles/theme/MainTheme';

import AdminDrawer from './AdminDrawer';

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


export default function AdminApp({ plants }){
    const [open, setOpen] = useState(true)
    return(
                
        <Box sx={{display:"flex"}}>
            <AdminDrawer open={open} setOpen={setOpen} />
            <Main open={open} >
                <div style={{height:"20px"}}/>
                <Outlet />
            </Main>
        </Box>
     )}