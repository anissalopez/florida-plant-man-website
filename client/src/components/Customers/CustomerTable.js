import React, {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';

import styles from "../../styles/CustomerTable.module.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First Name', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 130 },
 
  
];


export default function CustomerTable({}) {
    const [customers, setCustomers] = useState("")

 useEffect(()=>{
    const fetchCustomers = async () =>{
        const response = await fetch("/customers")
        const customers = await response.json()
        setCustomers(customers)
    }

    fetchCustomers()
 },[])

  return (


    <div style={{ height: 400, width: '100%', marginTop:"200px" }}>
      <DataGrid
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className={styles.data}
      />
    </div>

  );
}