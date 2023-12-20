import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import image from '../images/logo.png'



export default function TemporaryDrawer({toggleDrawer, state, setState}) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
    };
  

  const list = (anchor) => (
    <Box sx={{display:"flex-column", }}>
    <Box sx={{display:"flex", justifyContent:"center"}}>
    <img src={image} width="70px" height="100%" />
    </Box>
   
   
    <Divider  />

    <Box
    sx={{width: 250, pt:"10px",
    
       }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
      <List>
   
   
        {['Home', 'All Plants', 'Alocasia', 'Anthurium', 'Monstera', 'Philodendron', 'Syngonium' ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
 
      <List>
        {['About Us', 'Shipping Policy', 'Return Policy'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemText  secondary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );

  return (
    <div >
        <React.Fragment key="left">
      
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            PaperProps={{
                sx: {
                  backgroundColor: "#f1f1f1",
                }
              }}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
   
    </div>
  );
}