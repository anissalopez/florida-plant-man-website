import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { handleClick } from "../AppVariables/appVariables";
import { AdminContainer } from "../../styles/AdminPanel.styles"


export default function AdminPanel(){
  const navigate = useNavigate()
  const [open, setOpen] = useState({
     plants: false,
     customers: false
  })
  const handleClickAway = () =>{
    setOpen({...open, plants:false, customers:false})
  }

     return(
        <AdminContainer>
          <ClickAwayListener onClickAway={handleClickAway}>
          <List sx={{marginTop:"100px", fontSize:"35px"}}>
          {['Plants', 'View Plants', 'Add Plants', 'Customers', 'View Customers', 'Add Customers', 'Orders', 'Account'].map((text) => {
            if (text === 'View Plants' || text === 'Add Plants'){
              if(open.plants){
                return (            
                <ListItem sx={{fontSize:"18px", paddingLeft:"20px"}} key={text} 
                disablePadding onClick={(e)=>{handleClick(e,open, setOpen, navigate)}} >
                  <ListItemButton>
                    <ListItemText primary={text} disableTypography />
                  </ListItemButton> 
              </ListItem>
              )}  
            }
            else if (text === 'View Customers' || text === 'Add Customers'){
              if(open.customers){
                return (
                    <ListItem sx={{fontSize:"18px", paddingLeft:"20px"}} key={text} disablePadding 
                    onClick={(e)=>{handleClick(e,open, setOpen, navigate)}}>
                      <ListItemButton>
                        <ListItemText primary={text} disableTypography />
                      </ListItemButton> 
                    </ListItem>
                )}
              }
            else{
              return(
                <ListItem key={text} disablePadding onClick={(e)=>{handleClick(e,open, setOpen, navigate)}}>
                  <ListItemButton>
                    <ListItemText primary={text} disableTypography />
                  </ListItemButton> 
                </ListItem>)
            }
            return null
            })}
        </List>
        </ClickAwayListener>
      </AdminContainer>
     )
}