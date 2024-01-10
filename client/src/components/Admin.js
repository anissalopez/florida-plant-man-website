import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import AdminPanel from "./AdminPanel";
import AdminContent from "./AdminContent";
import Box from "@mui/material/Box";


export default function Admin({plants}){
    const [customers, setCustomers] = useState("")
  

    useEffect(()=>{

        const fetchCustomers = async() =>{
            const response = await fetch("/customers")
            const data = await response.json()
            if (!response){
                throw Error("Error fetching data")
            }
            setCustomers(data)
            console.log(data)
            
        }
        fetchCustomers()

    }, [])

    

    return(
        <Box sx={{display:"flex"}}>
          <AdminPanel />
          <AdminContent customers={customers} plants={plants}/>
        </Box>
    )
}