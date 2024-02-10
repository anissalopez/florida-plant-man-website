import React, {useEffect, useState} from "react";
import AdminApp from "./AdminApp";

export default function Admin({ plants }){
    const [customers, setCustomers] = useState("")
  
  
    useEffect(()=>{
        const fetchCustomers = async() =>{
            const response = await fetch("/customers")
            const data = await response.json()
            if (!response){
                throw Error("Error fetching data")
            }
            setCustomers(data)
        }
        fetchCustomers()

    }, [])

    return(

        <AdminApp></AdminApp>
        // <Box sx={{display:"flex"}}>
        //   <AdminPanel />
        //   <AdminContent customers={customers} plants={plants}/>
        // </Box>
    )
}