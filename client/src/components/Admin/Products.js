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
    const [initialValues, setInitialValues] = useState(null)
    const [newProduct, setNewProduct] = useState(false) 
    const [open, setOpen] = useState(false);
  
    const handleAddProduct = () => {
      setOpen(true);
      setNewProduct(true);
      setInitialValues(null)
      // setInitialValues( 
      //   {
      //     name: '',
      //     price: '',
      //     description: '',
      //     image1: '',
      //     image2: '',
      //     image3: '',
      //     water: '',
      //     sun: '',
      //     qty: ''
      //   }
      // )
      

    };
    const handleClose = () => {
      setOpen(false);
    };

    const editProduct =(plant) =>{
      setInitialValues(plant)
      setNewProduct(false)
      setOpen(true)
  
    }

    return(
        <Container>
        <Typography sx={{mb: 1}} variant='h4'>Products</Typography>
          <Button startIcon={<AddIcon />} 
            onClick={handleAddProduct}
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
          <ProductTable editProduct={editProduct} plants={plants} updatePlantList={updatePlantList} />
          <PlantForm setInitialValues={setInitialValues} newProduct={newProduct} initialValues={initialValues} updatePlantList={updatePlantList} handleClose={handleClose} setOpen={setOpen} open={open}/>  
        </Container>
   
    )
}