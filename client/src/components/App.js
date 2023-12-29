import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

import PlantViews from "./PlantViews";
import PlantDetail from "./PlantDetail";


const App = () => {
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
        <Routes>
          <Route exact path="/" element={<HomePage plants={plants}/>} />
          <Route exact path="/plants" element={<PlantViews plants={plants}/>} />
          <Route exact path="/plants/:id" element={<PlantDetail />} />
        </Routes>
      }
    </div>
  )}

export default App;
