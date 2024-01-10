import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Test from "./Test"
import PlantViews from "./PlantViews";
import PlantDetail from "./PlantDetail";
import Nav from "./Nav";
import Admin from "./Admin";
import PlantForm from "./PlantForm";

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
    <div>
      {isLoading && <h1>Page Loading...</h1>}
      {fetchError && <h1>{fetchError}</h1>}
      {!fetchError && !isLoading &&
      <div>
          <Nav />
        
          <Routes>
            <Route exact path="/" element={<HomePage plants={plants}/>} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/plants" element={<PlantViews plants={plants}/>} />
            <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} setIsLoading={setIsLoading} fetchError={fetchError} isLoading={isLoading}/>} />
            <Route exact path="/admin" element={<Admin plants={plants}/>} />
            <Route exact path="/admin/plantform" element={<PlantForm setPlants={setPlants} plants={plants}/>} />
          </Routes>
        </div>
      }
    </div>
  )};


