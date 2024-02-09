import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  IconButton  from "@mui/material/IconButton";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ShowMoreText from "react-show-more-text";
import { Colors } from "../../styles/theme/MainTheme";


export default function ProductTable({ plants, editProduct, updatePlantList }) {

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`/plants/${id}`, {
          method: "DELETE"
        })
          .then(resp => resp.json())
          .then(() => updatePlantList('DELETE', id))
    };
  };
    
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
                    <IconButton
                     onClick={()=>handleDelete(plant.id)}>
                        <DeleteIcon 
                        sx={{color:"red"}} />
                    </IconButton>   
                </TableCell> 
        </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}