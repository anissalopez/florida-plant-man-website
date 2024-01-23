import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import { Link } from "react-router-dom";

import image from "../../images/logo.png"






export const list = (anchor, toggleDrawer, handleNav, handlePlantNav) => (
    <Box sx={{display:"flex-column"}}>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <img alt="florida plant man logo" src={image} width="70px" height="100%" />
        </Box>
        <Divider  />
        <Box sx={{width: 250, pt:"10px",}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
              <List >
                <Link key="home" to={`/`} style={{textDecoration:'none', color: 'black'}} >
                <ListItem onClick={handlePlantNav} disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                </Link>
                <Link key="All Plants" to={"/plants/AllPlants"} style={{textDecoration:'none', color: 'black'}} >
                <ListItem onClick={handlePlantNav} disablePadding>
                    <ListItemButton>
                    <ListItemText primary="All Plants" />
                    </ListItemButton>
                </ListItem>
                </Link>
                {['Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium' ].map((text) => (
                <Link key={text} to={`/${text.toLowerCase()}`} style={{textDecoration:'none', color: 'black'}} >
                <ListItem onClick={handlePlantNav} disablePadding>
                    <ListItemButton>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                </Link>
                ))}
            </List>
            <List>
                {['Admin', 'About Us', 'Shipping Policy', 'Return Policy'].map((text) => (
                <ListItem  onClick={handleNav} key={text} disablePadding>
                    <ListItemButton >
                    <ListItemText  secondary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    </Box>
  );