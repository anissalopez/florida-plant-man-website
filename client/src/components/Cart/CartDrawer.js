import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


import Divider from '@mui/material/Divider';

import { ProductImage } from  "../../styles/Cart/Cart.styles";
import { Colors } from '../../styles/theme/MainTheme';



import { useCartContext } from '../../context/Cart';
import { useLoadingContext } from '../../context/Loading';
import { useErrorContext } from '../../context/Error';


export default function CartDrawer() {
  const [state, setState] = useState({
    right: false,
    
  });

  const toggleDrawer = ( open ) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ["right"]: open });
  };

  const { cart } = useCartContext()
  const { loading } = useLoadingContext()
  const { error } = useErrorContext()


  return (
    <>
    {cart.plants && !loading && !error && 
      <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer(true)}>right</Button>
          <Drawer
            variant="temporary"
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer(false)}
            sx={{width:"25%","& .MuiPaper-root": {
              backgroundColor:Colors.white2,
              width:"50%"
            } }}
          >
        <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              sx={{display:"flex", flexDirection:"column"}}
       >
        <Box sx={{display:"flex", 
                  justifyContent:"center", 
                  alignContent:"center",
                  fontFamily:"Flower"}}>
          <h3>
          My Cart
          </h3>
 
        </Box>
        <Divider></Divider>
        <Grid container sx={{marginTop:"20px", marginBottom:"20px"}}>
          {cart.plants.map((plant) => {
          return(
            <>
            <Grid item xs={4}>
              <Box sx={{width:"80%"}}>
                <ProductImage src={plant.image1} />
              </Box> 
            </Grid>
            <Grid item xs={8} sx={{display:"flex", 
                                    alignItems:"end",
                                    justifyContent:"flex-end"}}>
              <Box sx={{padding:"25px"}}>
                <p>${plant.price}</p>
              </Box>
            </Grid>
            </>
        
          )
        })}
    </Grid>
    <Divider />
    <Box sx={{display:"flex", justifyContent:"space-between", padding:"15px"}}>
      <p>Total</p>
      <p>${cart.total}</p>
    </Box>
  </Box>    
</Drawer>
</React.Fragment>
  </div>
    }
    </>
  );
};
