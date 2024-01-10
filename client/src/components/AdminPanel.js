import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from "../styles/AdminPanel.module.css";


export default function AdminPanel(){
     return(
        <Box className={styles.div}>
            <List sx={{marginTop:"100px", fontSize:"35px"}}>
        {['Plants', 'Shoppers', 'Orders', 'Account'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} disableTypography />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Box>
     )
}