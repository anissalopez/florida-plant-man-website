import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import NavDrawer from './NavDrawer';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';


export default function Nav() {
    const [state, setState] = useState({
        left: false
      });
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));
    const { pathname } = useLocation();
 
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
      };

    
    if (pathname === "/admin" || pathname === "/admin/messages" 
    || pathname === "/admin/customers" || pathname === "/admin/settings" 
    || pathname === "/admin/products" || pathname === "/admin/dashboard"
    || pathname === "/admin/reviews"
    ) 
    return null;

    return (
      <div >
        {
        matches ? 
          <NavMobile matches={matches} 
                    toggleDrawer={toggleDrawer}
          /> : 
          <NavDesktop matches={matches}  />
        }
        <NavDrawer  toggleDrawer={toggleDrawer} 
                    state={state} setState={setState} />
      </div>
    );
  };


