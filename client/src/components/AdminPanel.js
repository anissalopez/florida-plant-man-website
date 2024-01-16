import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




import styles from "../styles/AdminPanel.module.css";

import { useNavigate } from "react-router-dom";


export default function AdminPanel(){
  const navigate = useNavigate()
  const [open, setOpen] = useState({
     plants: false,
     customers: false
  })

  

  const handleClick = (e) =>{
    console.log(e)
  
    if (e.target.textContent === 'Plants'){
      setOpen({...open, plants:!(open.plants)})
    }
    if (e.target.textContent === 'Customers'){
      setOpen({...open, customers:!(open.customers)})
    }
    if (e.target.textContent === "Add Plants"){
      console.log(e)
      navigate("/admin/plantform")
    }
    if (e.target.textContent === 'View Plants') {
      console.log("View Plants Clicked"); 
      navigate("/admin/planttable");
    }
    if (e.target.textContent === 'View Customers') {
      navigate("/admin/customertable");
    }
    if (e.target.textContent === 'Add Customers') {
      navigate("/admin/customerform");
    }
    
  

  }
    const accordionValues = ['View Plants', 'Add Plants', 'View Customers', 'Add Customers']

     return(
        <Box className={styles.container}>
        <List sx={{marginTop:"100px", fontSize:"35px"}}>
        {['Plants', 'View Plants', 'Add Plants', 'Customers', 'View Customers', 'Add Customers', 'Orders', 'Account'].map((text, index) => {
            

                if (text === 'View Plants' || text === 'Add Plants'){

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

                  if (text === 'View Customers' || text === 'Add Customers'){

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