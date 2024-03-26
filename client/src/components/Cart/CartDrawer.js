import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem, deleteCartItem, fetchCart } from '../../actions/cartActions';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import { ProductImage } from "../../styles/Cart/Cart.styles";
import { Colors } from '../../styles/theme/MainTheme';

export default function CartDrawer({ toggleCartDrawer, cartDrawerState}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const error = useSelector((state) => state.cart.error);
  const loading = useSelector((state) => state.cart.loading);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      
      {!loading && !error && cart.cart  && (
        <React.Fragment key="right">
          <Drawer
            anchor="right"
            open={cartDrawerState}
            onClose={toggleCartDrawer(false)}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: Colors.white2,
                width: "25%"
              }
            }}
          >
            <Box
              role="presentation"
              onKeyDown={toggleCartDrawer(false)}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box sx={{
                padding: "10px",
                color: Colors.primary,
                '&:hover': {
                  color: Colors.fourth
                }
              }}>
                <CloseIcon onClick={toggleCartDrawer(false)} />
              </Box>
              <Box sx={{
                display: "flex",
                color: Colors.secondary,
                justifyContent: "center",
                alignContent: "center",
                fontFamily: "Flower"
              }}>
                <h3>My Cart</h3>
              </Box>
              <Divider />
              <Grid container sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
                marginBottom: "40px",
                marginLeft: "10px"
              }}>

                {cart.cart.cartitems.length > 0 ? cart.cart.cartitems.map((item) => (
                  <React.Fragment key={item.name}>
                    <Grid item xs={4}>
                      <Box sx={{ width: "80%" }}>
                        <ProductImage src={item.displayImg} />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <InputLabel>qty</InputLabel>
                        <Select
                          value={item.qty}
                          label="qty"
                          onChange={(e) => dispatch(updateCartItem(item.id, e.target.value))}
                        >
                          {[...Array(6).keys()].map(value => (
                            <MenuItem key={value + 1} value={value + 1}>
                              {value + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>{item.qty > 1 ? <p>${formatNumberWithCommas(item.price * item.qty)}</p>:<p>${item.price}</p>}</Box>
                      <Box
                        onClick={(e) => dispatch(deleteCartItem(item.id))}
                        sx={{ '&:hover': { color: "red" } }}
                      >
                        <DeleteIcon />
                      </Box>
                    </Grid>
                  </React.Fragment>
                )) : (
                  <p>No Items in Cart</p>
                )}
              </Grid>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "15px" }}>
                <p>Total</p>
                <p>${formatNumberWithCommas(cart.cart.total)}</p>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", padding: "10px" }}>
              <Button sx={{
                backgroundColor: Colors.secondary,
                color: Colors.white2,
                '&:hover': {
                  backgroundColor: Colors.fourth,
                  color: Colors.primary
                }
              }}>
                Proceed to Checkout
              </Button>
            </Box>
          </Drawer>
        </React.Fragment>
      )}
    </>
  );
}
