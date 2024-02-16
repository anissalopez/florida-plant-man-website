import { Link } from "react-router-dom";

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import { Colors } from '../../styles/theme/MainTheme';
import image from "../../images/logo.png"

export const list = (anchor, toggleDrawer, handleNav) => (
    <Box sx={{display:"flex-column"}}>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <img alt="florida plant man logo" src={image} width="70px" height="100%" />
        </Box>
        <Divider  />
        <Box sx={{width:250, pt:"10px",}}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}>
            <List sx={{'& .MuiListItemButton-root':{
                        '&:hover':{
                            backgroundColor:Colors.fourth,
                            color:Colors.primary
                        },
                        },
                        '& a':{
                            textDecoration:"none",
                            color:Colors.primary}}}>
                <Link key="home" to={`/`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                        <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {['All', 'Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium'].map((text) => (
                <Link key={text} to={`/plants/category/${text.toLowerCase()}`} >
                    <ListItem onClick={handleNav} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                ))}
            </List>
            <List sx={{'& .MuiListItemButton-root':{
                        '&:hover':{
                            backgroundColor:Colors.fourth,
                            "& .MuiTypography-root":{
                                color:Colors.primary
                            }
                    }}}}>
                {['Admin', 'About Us', 'Shipping Policy', 'Return Policy'].map((text) => (
                <ListItem  onClick={handleNav} key={text} disablePadding>
                    <ListItemButton sx={{'& .MuiTypography-root':{
                        color:Colors.primary
                            }}}>
                        <ListItemText secondary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    </Box>
  );