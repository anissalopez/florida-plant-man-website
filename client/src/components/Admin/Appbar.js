import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Colors } from '../../styles/theme/MainTheme';
import SearchAppBar from './SearchComponent';




const drawerWidth = 240;


export default function Appbar({ open, handleDrawerOpen }){
    const AppBarStyled = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));

        return(

            <AppBarStyled position="fixed" open={open} elevation={0}>
              <Toolbar  sx={{backgroundColor:Colors.admindarkblue}}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ color:Colors.admingreen1, mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
               {!open &&  <Typography
                fontWeight={'bold'}
                 variant="h6" noWrap component="div">
                  Admin Dashboard
                </Typography>}
                <SearchAppBar />
              </Toolbar>
            </AppBarStyled>
        )


}