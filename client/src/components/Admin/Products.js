import {useState} from "react";
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/TableContainer';
import ProductTable from './ProductTable';


import { Colors } from '../../styles/theme/MainTheme';

import PlantForm from './PlantForm';

export default function Products(){
    const [initialValues, setInitialValues] = useState(null);
    const [newProduct, setNewProduct] = useState(false);
    const [open, setOpen] = useState(false);
    const plants = useSelector((state) => state.plants)
  
    const handleAddProduct = () => {
      setOpen(true);
      setNewProduct(true);
      setInitialValues(null);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const editProduct = (plant) =>{
      setInitialValues(plant);
      setNewProduct(false);
      setOpen(true);
    };

    return(
        <Container>
          <Typography sx={{mt:7,mb: 1}} variant='h4'>Products</Typography>
            <Button startIcon={<AddIcon />} 
              onClick={handleAddProduct}
                sx={{
                    mt:2,
                    mb:2,
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
            <ProductTable editProduct={editProduct} plants={plants} />
            <PlantForm setInitialValues={setInitialValues} newProduct={newProduct} initialValues={initialValues} handleClose={handleClose} setOpen={setOpen} open={open}/>  
        </Container>
    );
};