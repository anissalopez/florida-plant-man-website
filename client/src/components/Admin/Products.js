import {useState} from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Colors } from '../../styles/theme/MainTheme';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/TableContainer';
import ProductTable from './ProductTable';
import { useNavigate } from 'react-router-dom';
import PlantForm from './PlantForm';



export default function Products({ plants, updatePlantList }){
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

   

    const [initialValues, setInitialValues] = useState(null)

    const editProduct =(plant) =>{
      console.log(plant)
      setOpen(true)
      
     
      setInitialValues(plant)

    }

    return(
        <Container>
        <Typography sx={{mb: 1}} variant='h4'>Products</Typography>
        <Button startIcon={<AddIcon />} 
          onClick={handleClickOpen}
            sx={{
                backgroundColor:Colors.adminorange,
                color:Colors.white,
                fontFamily:"Verdana",
                fontWeight:"bold",
                "&:hover":{
                    backgroundColor:Colors.adminlightblue,

                }
            }}>
            Add Product
        </Button>
        
          <ProductTable editProduct={editProduct} plants={plants}/>
          <PlantForm initialValues={initialValues} updatePlantList={updatePlantList} handleClose={handleClose} open={open}/>
         
        </Container>
   
    )
}