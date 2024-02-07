import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useLoadingContext }   from "../../context";

import HomePage from "../Home/HomePage";
import PlantDetail from "../Products/ProductDetailPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Admin from "../Admin/Admin";
import PlantForm from "../Admin/PlantForm";
import PlantTable from "../Admin/PlantTable";
import CustomerTable from "../Customers/CustomerTable";
import CustomerForm from "../Customers/CustomerForm";
import PlantContainer from "../Plants/PlantContainer";
import PlantCategory from "../Products/ProductCategoryList";
import PostReview from "../Reviews/PostReview";

import {ThreeDots} from 'react-loading-icons';

import { ThemeProvider } from "@mui/material/styles";
import  theme  from "../../styles/theme/MainTheme";
import Container from "@mui/material/Container";
import { Colors } from "../../styles/theme/MainTheme";

export default function App(){
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  
  const plant_url = '/plants';

  const { loading, setLoading } = useLoadingContext();

  useEffect(()=> {
    const fetchPlants = async () => {
      try{
          const response = await fetch(plant_url)
          if (!response.ok) throw Error('Error receiving data')
          const plantList = await response.json()
          setPlants(plantList)
          setFetchError(null)
      }catch(err){
          setFetchError(err.message)
      }finally{
          setLoading(false);
      }
    };
    fetchPlants();
  }, []);

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
                  <Route exact path="/" element={<HomePage plants={plants}  theme={theme}/>} />
                  <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} />} />
                  <Route exact path="/admin" element={<Admin plants={plants}/>} />
                  <Route exact path="/admin/plantform" element={<PlantForm setPlants={setPlants} plants={plants}/>} />
                  <Route exact path="/admin/planttable" element={<PlantTable setPlants={setPlants} plants={plants}/>} />
                  <Route exact path="/admin/customertable" element={<CustomerTable />} />
                  <Route exact path="/admin/customerform" element={<CustomerForm />} />
                  <Route exact path="/plants/all" element={<PlantContainer plants={plants} setPlants={setPlants} />} />
                  <Route exact path="/:category" element={<PlantCategory plants={plants}  />} />
                  <Route exact path="/reviews" element={<PostReview plants={plants} />} /> 
                </Routes>
                <Footer></Footer> 
    </ThemeProvider>
 }
 </>)};

      