import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

import { handleClick } from "./appVariables";


const AdminContainer = styled(Box)({
  display:"flex",
  flexDirection:"column",
  alignItems:"left",
  width:"25vw",
  justifyContent:"left",
  height:"100vh",
  backgroundColor: "#6DC01E",
  contentFit:"auto"
})


export default function AdminPanel(){
  const navigate = useNavigate()
  const [open, setOpen] = useState({
     plants: false,
     customers: false
  })

     return(
        <AdminContainer>
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
            else return(
              <ListItem key={text} disablePadding onClick={(e)=>{handleClick(e,open, setOpen, navigate)}}>
                <ListItemButton>
                  <ListItemText primary={text} disableTypography />
                </ListItemButton> 
              </ListItem>)
            })}
        </List>
      </AdminContainer>
     )
}