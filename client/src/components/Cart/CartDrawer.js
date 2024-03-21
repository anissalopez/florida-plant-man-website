import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';

import { ProductImage } from  "../../styles/Cart/Cart.styles";
import { Colors } from '../../styles/theme/MainTheme';



import { useCartContext } from '../../context/Cart';
import { useLoadingContext } from '../../context/Loading';
import { useErrorContext } from '../../context/Error';


export default function CartDrawer({toggleCartDrawer, cartState}) {

  const { cart, setCart } = useCartContext()
  const { loading } = useLoadingContext()
  const { error } = useErrorContext();
  console.log(cart)

  const handleChange = (e, id, method) => {
 
      if (method === 'Patch'){
        const updateCart = async () => {
          try {
              const response = await fetch('/cartitems', {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({plant_id:id, qty:e.target.value})
                });
              if (response.ok) {
                  const updatedCart = await response.json()
              
                  setCart(updatedCart)   
              } else {
                alert("Error updating quantity of cart, please try again later") 
            } 
  
          }
        catch(err){
              console.log(err)
          }
      }
      updateCart()
      }
    if (method === 'Delete'){
  
        const updateCart = async () => {
            try{const response = await fetch('/cartitems', {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({plant_id:id})
            });
              if (response.ok) {
                  const updatedCart = await response.json()
              
                  setCart(updatedCart)   
              } else {
                alert("Error deleting cart item, please try again later") 
              } 
            }
            catch(err){
                    console.log(err)
            }
        }
      updateCart()
    }
    

  };
  


  return (
    <>
      {/* {cart.cartitems.length === 0 && <React.Fragment key="right">
          <Drawer
              
                anchor="right"
                open={cartState["right"]}
                onClose={toggleCartDrawer(false)}
                sx={{"& .MuiPaper-root": {
                  backgroundColor:Colors.white2,
                  width:"25%"
                } }}
          >
            <Box
                  role="presentation"
                
                  onKeyDown={toggleCartDrawer(false)}
                  sx={{display:"flex", flexDirection:"column"}}
            >
            No items in cart
            </Box>
          </Drawer>
    </React.Fragment>
    } */}
        
    {cart.cartitems && !loading && !error && 
      <div>
      <React.Fragment key="right">
          <Drawer
          
            anchor="right"
            open={cartState["right"]}
            onClose={toggleCartDrawer(false)}
            sx={{"& .MuiPaper-root": {
              backgroundColor:Colors.white2,
              width:"25%"
              
            } }}
          >
        <Box
              role="presentation"
             
              onKeyDown={toggleCartDrawer(false)}
              sx={{display:"flex", flexDirection:"column"}}
       >
        <Box sx={{padding:"10px", color:Colors.primary,
                  '&:hover':{
                    color:Colors.fourth
                  }}}>
          <CloseIcon onClick={toggleCartDrawer(false)}></CloseIcon>

        </Box>
        <Box sx={{display:"flex", 
                  color:Colors.secondary,
                  justifyContent:"center", 
                  alignContent:"center",
                  fontFamily:"Flower"}}>
          <h3>
          My Cart
          </h3>
 
        </Box>
        <Divider></Divider>
        <Grid container sx={{display:"flex", justifyContent:"space-around", marginTop:"20px",marginBottom:"40px", marginLeft:"10px"}}>
          {cart.cartitems.map((item) => {
            
          return(
            <React.Fragment key={item.name}>
            <Grid item xs={4} >
              <Box sx={{width:"80%"}}>
                <ProductImage src={item.displayImg} />
              </Box> 
            </Grid>
            <Grid item xs={4}>
              <Box>
                <InputLabel>qty</InputLabel>
                  <Select
                    value={item.qty}
                    label="qty"
                    onChange={(e)=>handleChange(e,item.id, 'Patch')}
                  >
                    <MenuItem value={1}>
                      1
                    </MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>

                  
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box><p>${item.price}</p></Box>
              <Box 
                onClick={(e)=>handleChange(e, item.id, 'Delete')}
                sx={{'&:hover':{
                color:"red"
                }}}
              ><DeleteIcon /></Box>


            </Grid>
            </React.Fragment>
        
          )
        })}
    </Grid>
    <Divider />
    <Box sx={{display:"flex", justifyContent:"space-between", padding:"15px"}}>
      <p>Total</p>
      <p>${cart.total}</p>
    </Box>
  </Box>    
  <Box sx={{display:"flex", justifyContent:"end", padding:"10px"}}>
    <Button sx={{backgroundColor:Colors.secondary,  
                color:Colors.white2,
                '&:hover':{
                  backgroundColor:Colors.fourth,
                  color:Colors.primary
                }}}>
      Proceed to Checkout
    </Button>
  </Box>
</Drawer>
</React.Fragment>
  </div>
    }
    </>
  );
};
