import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Colors } from '../../styles/theme/MainTheme';

import SearchAppBar from './SearchComponent';
import { AppBarStyled } from '../../styles/Admin/Admin.styles'

export default function Appbar({ open, setOpen}){
    return(
            <AppBarStyled position="fixed" open={open} elevation={0}>
                <Toolbar  sx={{backgroundColor:Colors.admindarkblue}}>
                  <IconButton
                    aria-label="open drawer"
                    onClick={()=>setOpen(true)}
                    edge="start"
                    sx={{ color:Colors.admingreen1, mr: 2, ...(open && { display: 'none' }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                    {!open &&  
                    <Typography
                          fontWeight={'bold'}
                          variant="h6" noWrap component="div">
                        Admin Dashboard
                      </Typography>
                      }
                  <SearchAppBar />
                </Toolbar>
            </AppBarStyled>
        );
};