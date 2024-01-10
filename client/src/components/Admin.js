import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function Admin(){
    const [shoppers, setShoppers] = useState("")
  

    useEffect(()=>{

        const fetchShoppers = async() =>{
            const response = await fetch("/shoppers")
            const data = await response.json()
            if (!response){
                throw Error("Error fetching data")
            }
            setShoppers(data)
            console.log(data)
            
        }
        fetchShoppers()

    }, [])

    

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"left", width:"25vw",justifyContent:"left", height:"100vh", backgroundColor:"#6DC01E"}}>
            <List sx={{marginTop:"90px"}}>
        {['Plants', 'Shoppers', 'Orders', 'Account'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
       
          

 
        </div>
    )
}