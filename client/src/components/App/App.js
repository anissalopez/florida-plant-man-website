import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useLoadingContext }   from "../../context/Loading";
import { useReviewsContext } from "../../context/Reviews";
import { useCustomersContext } from "../../context/Customers";

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

import {ThreeDots} from 'react-loading-icons';


export default function App(){
  const [plants, setPlants] = useState([]);
  const [fetchError, setFetchError] = useState(null);
 
  const plant_url = '/plants';
  const { loading, setLoading } = useLoadingContext();
  const { customers, setCustomers } = useCustomersContext();
  const { reviews, setReviews } = useReviewsContext();

  useEffect(()=> {
    const fetchPlants = async () => {
      try{
          const response = await fetch(plant_url);
          if (!response.ok) throw Error('Error receiving data');
          const plantList = await response.json();
          setPlants(plantList);
          setFetchError(null);
      }catch(err){
          setFetchError(err.message);
      }finally{
          setLoading(false);
      }
    };
    fetchPlants();
  }, [setLoading]);

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
        fetchError && <h2>Error loading page, please try again later</h2>
      }
      {!fetchError && !loading && 
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"> 
              <Nav></Nav>
            </Container>
                  <Routes>
                    <Route exact path="/" element={<HomePage plants={plants}  theme={theme} reviews={reviews} setReviews={setReviews}/>} />
                    <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} />} />
                    <Route exact path="/plants/category/:category" element={<ProductCategoryList plants={plants}  />} />
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

      