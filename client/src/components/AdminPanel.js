import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

import styles from "../styles/AdminPanel.module.css";

import { useNavigate } from "react-router-dom";


export default function AdminPanel(){
  const navigate = useNavigate()

  const handleClick = (e) =>{
    console.log(e.target.textContent)
    if (e.target.textContent === "Add Plants"){
      navigate("/admin/plantform")
  }

  }


     return(
        <Box className={styles.container}>
        <List sx={{marginTop:"100px", fontSize:"35px"}}>
        {['Plants', 'Customers', 'Orders', 'Account'].map((text, index) => {
              if (text==='Plants' || text==='Customers'){
                return(
                <ListItem key={text} disablePadding onClick={handleClick}>
                    <Accordion square="true" variant="plain" sx={{backgroundColor:"#6DC01E", color:"#fff"}}  >
                        <AccordionSummary
                          expandIcon={<AddIcon />}
                          
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          {text}
                        </AccordionSummary>
                  <AccordionDetails sx={{marginLeft:"30px"}}>
                   <p onClick={handleClick}>View all {text}</p>
                   <p onClick={handleClick}>Add {text}</p>
                  </AccordionDetails>
            </Accordion>  
            </ListItem>)
          }
          else{
            return(
            <ListItem key={text} disablePadding onClick={handleClick}>
            
            <ListItemButton>
                <ListItemText primary={text} disableTypography />
              </ListItemButton> 
        </ListItem>)

          }
       
       
        
        })}
        </List>
      </Box>
     )
}