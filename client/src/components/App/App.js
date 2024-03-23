import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem, deleteCartItem, addCartItem  } from '../../actions/cartActions';

import { useLoadingContext }   from "../../context/Loading";
import { useReviewsContext } from "../../context/Reviews";
import { useCustomersContext } from "../../context/Customers";
import { usePlantsContext } from "../../context/Plants";
import { useErrorContext } from "../../context/Error";
import { useCartContext } from '../../context/Cart';

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
import Settings from "../Admin/Settings";
import Reviews from "../Admin/Reviews";
import Customers from "../Admin/Customers";
import AdminApp from "../Admin/AdminApp";
import CartDrawer from "../Cart/CartDrawer";

import {ThreeDots} from 'react-loading-icons';



export default function App(){
  const { loading, setLoading } = useLoadingContext();
  const { customers, setCustomers } = useCustomersContext();
  const { reviews, setReviews } = useReviewsContext();
  const { plants, setPlants } = usePlantsContext();

  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart.cartItems);
  // const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);
  // const { setError } = useErrorContext();
  // const { cart, setCart } = useCartContext()


  const [cartDrawerState, setCartDrawerState] = useState({
    right: false,
    
  });

  const toggleCartDrawer = ( open ) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setCartDrawerState({ ...cartDrawerState, ["right"]: open });
  };


  const updatePlantList = (method, plantInfo) =>{
    if(method === 'POST'){
      const updatedPlants = [...plants, plantInfo];
      setPlants(updatedPlants);
    };
    if(method === 'PATCH'){
      const newPlantArray = plants.map((plant) => {
        if(plant.id === plantInfo.id) {
            return {
              ...plant,
              ...plantInfo
            };
          } else {
            return plant;
          };
        });
        setPlants(newPlantArray);
      };
    if(method === 'DELETE'){
      const updatedPlants = plants.filter((plant) => plant.id !== plantInfo.id);
      setPlants(updatedPlants);  
    };
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
              <Nav toggleCartDrawer={toggleCartDrawer}></Nav>
              <CartDrawer toggleCartDrawer={toggleCartDrawer} setCartDrawerState={setCartDrawerState} cartDrawerState={cartDrawerState}/>
            </Container>
                  <Routes>
                    <Route exact path="/" element={<HomePage plants={plants}  theme={theme} reviews={reviews} setReviews={setReviews} toggleCartDrawer={toggleCartDrawer} 
                    setDrawerCartState={setCartDrawerState} cartState={cartDrawerState}
                    
                    />} />
                    <Route exact path="/plants/:id" element={<PlantDetail  />} />
                    <Route exact path="/plants/category/:category" element={<ProductCategoryList plants={plants} />} />
                    <Route  exact path="/admin" element={<AdminApp updatePlantList={updatePlantList}/>}>
                      <Route exact path="products"  element={<Products plants={plants} updatePlantList={updatePlantList}/>} />
                      <Route exact path="reviews" element={<Reviews reviews={reviews} setReviews={setReviews} />} />
                      <Route exact path="customers" element={<Customers customers={customers} setCustomers={setCustomers} />} />
                      <Route exact path="dashboard" element={<Dashboard />} />
                      <Route exact path="settings" element={<Settings />} /> 
                    </Route>  
                  </Routes>   
                  <Footer />          
        </ThemeProvider>
      }
    </>
    );
  };

      