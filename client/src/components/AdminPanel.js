import React, { useState } from "react";
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
  const [open, setOpen] = useState({
     plants: false,
     customers: false
  })
  console.log(open)
  

  const handleClick = (e) =>{
  
    if (e.target.textContent === 'Plants'){
      setOpen({...open, plants:!(open.plants)})
    }
    if (e.target.textContent === 'Customers'){
      setOpen({...open, customers:!(open.customers)})
    }
    if (e.target.textContent === "Add Plants"){
      navigate("/admin/plantform")
  }

  }
    const accordionValues = ['View Plants', 'Add Plants', 'View Customers', 'Add Customers']

     return(
        <Box className={styles.container}>
        <List sx={{marginTop:"100px", fontSize:"35px"}}>
        {['Plants', 'View Plants', 'Add Plants', 'Customers', 'View Customers', 'Add Customers', 'Orders', 'Account'].map((text, index) => {
            

                if (text === 'View Plants' || text == 'Add Plants'){

                        if(open.plants){
                          return (
                            <ListItem key={text} disablePadding onClick={handleClick} 
                                      className={accordionValues.includes(text) ? styles["accordion-values"]: null}>
                            <ListItemButton>
                              <ListItemText primary={text} disableTypography />
                            </ListItemButton> 
                            </ListItem>

                          )
                        }
                        else{
                          return null
                        }
                      }

                  if (text === 'View Customers' || text == 'Add Customers'){

                        if(open.customers){
                          return (
                            <ListItem key={text} disablePadding onClick={handleClick} 
                                      className={accordionValues.includes(text) ? styles["accordion-values"]: null}>
                            <ListItemButton>
                              <ListItemText primary={text} disableTypography />
                            </ListItemButton> 
                            </ListItem>

                          )
                        }
                        else{
                          return null
                        }
                      }
                
                else{
                  return(

                  
                  <ListItem key={text} disablePadding onClick={handleClick}>
                    <ListItemButton>
                      <ListItemText primary={text} disableTypography />
                    </ListItemButton> 
                    </ListItem>

                )}
               
                    

                  

                })}

              
              
     
        </List>
      </Box>
     )
}