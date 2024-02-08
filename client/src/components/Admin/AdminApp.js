import Box from '@mui/material/Box';
import { Colors } from '../../styles/theme/MainTheme';
import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { DrawerWidth } from '../../styles/theme/MainTheme';
import AdminDrawer from './AdminDrawer';
import Products from './Products';
import { Outlet } from "react-router-dom"

import { Routes, Route } from "react-router-dom";

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
    const [open, setOpen] = useState(true)
    return(
                
        <Box sx={{display:"flex", background:Colors.admingray, height:'100vh' }}>
            <AdminDrawer open={open} setOpen={setOpen}>
           
            

            </AdminDrawer>
            
                 
                
             
            <Main open={open}>
                <Outlet />
            
          

            </Main>

        </Box>
     )}