import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from "../../actions/plantsActions";
import { fetchReviews } from "../../actions/reviewActions";
import { fetchCustomers } from "../../actions/customerActions";
import { fetchCart } from "../../actions/cartActions";

import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

import  theme  from "../../styles/theme/MainTheme";
import { Colors } from "../../styles/theme/MainTheme";

import HomePage from "../Home/HomePage";
import PlantDetail from "../Products/ProductDetailPage";
import ProductCategoryList from "../Products/ProductCategoryList";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Dashboard from "../Admin/Dashboard";
import Products from "../Admin/Products";

import Reviews from "../Admin/Reviews";
import Customers from "../Admin/Customers";
import AdminApp from "../Admin/AdminApp";
import CartDrawer from "../Cart/CartDrawer";

import {ThreeDots} from 'react-loading-icons';




export default function App(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlants());
    dispatch(fetchCustomers());
    dispatch(fetchReviews());
    dispatch(fetchCart());
  }, [dispatch]);


  const loading = useSelector((state) => state.plants.loading);
  const error = useSelector((state) => state.plants.error);


  const [cartDrawerState, setCartDrawerState] = useState(false);

  const toggleCartDrawer = ( open ) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setCartDrawerState(open);
  };

  return(
    <>
      {
        loading &&  
        <Container style={{display:"flex", justifyContent:"center", marginTop:"300px"}}>
          <ThreeDots stroke={Colors.secondary} />
        </Container>
      }
      {
        error && <h2>Error loading page, please try again later</h2>
      }
      {!error && !loading && 
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"> 
              <Nav cartDrawerState={cartDrawerState} toggleCartDrawer={toggleCartDrawer}></Nav>
              <CartDrawer toggleCartDrawer={toggleCartDrawer} setCartDrawerState={setCartDrawerState} cartDrawerState={cartDrawerState}/>
            </Container>
                  <Routes>
                    <Route exact path="/" element={<HomePage  theme={theme} toggleCartDrawer={toggleCartDrawer} 
                    setDrawerCartState={setCartDrawerState} cartState={cartDrawerState}
                    />} />
                    <Route exact path="/plants/:id" element={<PlantDetail  />} />
                    <Route exact path="/plants/category/:category" element={<ProductCategoryList  />} />
                    <Route  exact path="/admin" element={<AdminApp />}>
                      <Route exact path="products"  element={<Products  />} />
                      <Route exact path="reviews" element={<Reviews />} />
                      <Route exact path="customers" element={<Customers />} />
                      <Route exact path="dashboard" element={<Dashboard />} />
                 
                    </Route>  
                  </Routes>   
                  <Footer />          
        </ThemeProvider>
      }
    </>
    );
  };

      