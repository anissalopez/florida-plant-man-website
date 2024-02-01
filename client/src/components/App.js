import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import HomePage from "./HomePage";
import PlantDetail from "./Plants/PlantDetail";
import Nav from "./Nav/Nav";
import Admin from "./Admin/Admin";
import PlantForm from "./Admin/PlantForm";
import PlantTable from "./Admin/PlantTable";
import CustomerTable from "./Customers/CustomerTable";
import CustomerForm from "./Customers/CustomerForm";
import PlantContainer from "./Plants/PlantContainer";
import PlantCategory from "./Plants/PlantCategory";
import PostReview from "./Reviews/PostReview";

import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme/MainTheme";
import Banner from "./Banner/Banner";

export default function App(){
  const [plants, setPlants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  
  const plant_url = '/plants'

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
          setIsLoading(false);
      }
    }
    fetchPlants()
  }, [])


  

 

  return(
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" >
      <Nav></Nav>
      <Banner />
      

    </Container>
    </ThemeProvider>
    // <div>
    //   {isLoading && <h1>Page Loading...</h1>}
    //   {fetchError && <h1>{fetchError}</h1>}
    //   {!fetchError && !isLoading &&
    //   <div>
    //       <Nav /> 
    //       <Routes>
    //         <Route exact path="/" element={<HomePage plants={plants}/>} />
    //         <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} setIsLoading={setIsLoading} fetchError={fetchError} isLoading={isLoading}/>} />
    //         <Route exact path="/admin" element={<Admin plants={plants}/>} />
    //         <Route exact path="/admin/plantform" element={<PlantForm setPlants={setPlants} plants={plants}/>} />
    //         <Route exact path="/admin/planttable" element={<PlantTable setPlants={setPlants} plants={plants}/>} />
    //         <Route exact path="/admin/customertable" element={<CustomerTable />} />
    //         <Route exact path="/admin/customerform" element={<CustomerForm />} />
    //         <Route exact path="/plants/AllPlants" element={<PlantContainer plants={plants} setPlants={setPlants} />} />
    //         <Route exact path="/:category" element={<PlantCategory plants={plants} />} />
    //         <Route exact path="/reviews" element={<PostReview plants={plants} />} />
    //       </Routes>
    //     </div>
    //   }
    // </div>
  )};


