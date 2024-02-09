// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'qty', headerName: 'Quantity', width: 130 },
//   { field: 'water', headerName: 'Water Req.', width: 130 },
//   { field: 'sun', headerName: 'Sun Req.', width: 130 },
//   { field: 'image1', headerName: 'Image URL', width: 130 },
//   { field: 'image2', headerName: 'Image URL', width: 130 },
//   { field: 'image3', headerName: 'Image URL', width: 130 },
  
// ];


// export default function PlantTable({plants}) {

//   return (


//     <div style={{ height: 400, width: '100%', marginTop:"200px" }}>
//       <DataGrid
//         rows={plants}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>

//   );
// }


import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  IconButton  from "@mui/material/IconButton";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import ShowMoreText from "react-show-more-text";
import { Icon } from "@mui/material";
import { Colors } from "../../styles/theme/MainTheme";


export default function ProductTable({ plants, editProduct }) {
    
   

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead > 
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell >Price</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell >Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {plants.map((plant) => (
            <TableRow
              key={plant.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {plant.name}
              </TableCell>
              <TableCell>${plant.price}</TableCell>
              <TableCell >{plant.qty}</TableCell>
              <TableCell sx={{
                '& .show-more-less-clickable':{
                    color:"red",
                    display:"flex",
                    justifyContent:"flex-end",
                    marginRight:"20px",
                '&:hover':{
                    color:Colors.admingreen1
                }
                }
              }}>
                    <ShowMoreText
                        lines={2}
                        more={<ExpandMoreIcon />}
                        less={"view less" }
                        expanded={false}
                      
                      
                        >
                     {plant.description}
                    </ShowMoreText>
                </TableCell >
                <TableCell>
                    <IconButton 
                    sx={{color:Colors.adminlightblue, '&:hover':{
                            color:Colors.admingreen1
                        }}}
                      onClick={()=>editProduct(plant)}
                         >
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon sx={{color:"red"}} />
                    </IconButton>
                 

                  
                    
                   
                </TableCell>

                
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}