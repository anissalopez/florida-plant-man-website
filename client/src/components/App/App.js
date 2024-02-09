import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useLoadingContext }   from "../../context";

import HomePage from "../Home/HomePage";
import PlantDetail from "../Products/ProductDetailPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Admin from "../Admin/Admin";
import Dashboard from "../Admin/Dashboard";
import Products from "../Admin/Products";
import Settings from "../Admin/Settings";
import Sidebar from "../Admin/Sidebar";

import PlantForm from "../Admin/PlantForm";
import PlantTable from "../Admin/ProductTable";
import CustomerTable from "../Customers/CustomerTable";
import CustomerForm from "../Customers/CustomerForm";
import PlantContainer from "../Products/ProductFilterContainer";
import ProductCategoryList from "../Products/ProductCategoryList";
import PostReview from "../Reviews/PostReview";

import {ThreeDots} from 'react-loading-icons';

import { ThemeProvider } from "@mui/material/styles";
import  theme  from "../../styles/theme/MainTheme";
import Container from "@mui/material/Container";
import { Colors } from "../../styles/theme/MainTheme";
import AdminApp from "../Admin/AdminApp";


export default function App(){
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [hide, setHide] = useState(false)
  
  const plant_url = '/plants';

  const { loading, setLoading } = useLoadingContext();

  useEffect(()=> {
    const fetchPlants = async () => {
      try{
          const response = await fetch(plant_url)
          if (!response.ok) throw Error('Error receiving data')
          const plantList = await response.json()
          setPlants(plantList)
          setHide(false)
          setFetchError(null)
      }catch(err){
          setFetchError(err.message)
      }finally{
          setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  const updatePlantList = (newPlant) =>{
    console.log(newPlant)
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

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
            <Nav  ></Nav>
          </Container>
                <Routes>
                  <Route exact path="/" element={<HomePage plants={plants}  theme={theme}/>} />
                  <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} />} />
                  <Route exact path="/plants/category/:category" element={<ProductCategoryList plants={plants}  />} />
                  <Route exact path="/reviews" element={<PostReview plants={plants} />} /> 
                  <Route  exact path="/admin" element={<AdminApp plants={plants}/>}>
                    <Route exact path="products"  element={<Products plants={plants} updatePlantList={updatePlantList}/>} />
                    <Route exact path="dashboard" element={<Dashboard />} />
                    <Route exact path="settings" element={<Settings />} />
                    <Route exact path="sidebar" element={<Sidebar/>} />
                 
                    {/* <Route exact path="addproduct" element={<PlantForm/>} /> */}
                 
                    
                  </Route> 
                  {/* <Route  path="/products" element={<Products />} /> */}
                </Routes>
                <Footer hide={hide} setHide={setHide} />          
    </ThemeProvider>
 }
 </>)};

      