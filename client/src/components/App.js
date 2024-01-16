import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import HomePage from "./HomePage";
import Test from "./Test"
import PlantViews from "./PlantViews";
import PlantDetail from "./PlantDetail";
import Nav from "./Nav";
import Admin from "./Admin";
import PlantForm from "./PlantForm";
import PlantTable from "./PlantTable";
import CustomerTable from "./CustomerTable";
import CustomerForm from "./CustomerForm";
import AllPlants from "./AllPlants"

export default function App(){
  const [plants, setPlants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [filteredPlants, setFilteredPlants] = useState("")
  
  const plant_url = '/plants'

  const navigate = useNavigate()

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

  const handlePlantNav = (e) =>{
     
    if (e.target.textContent === 'All Plants'){
        console.log(e)
        navigate("/allplants")
    }

    // if (e.target.textContent === 'Alocasia'){
    //  const filter_plants = plants.filter((plant) => (
    //     plant.name.toLowerCase().includes('alocasia')
    //   ))

    //   setFilteredPlants(filter_plants)
    //   navigate("/allplants")
    // }

}
  

  return(
    <div>
      {isLoading && <h1>Page Loading...</h1>}
      {fetchError && <h1>{fetchError}</h1>}
      {!fetchError && !isLoading &&
      <div>
          <Nav handlePlantNav={handlePlantNav}/>
        
          <Routes>
            <Route exact path="/" element={<HomePage plants={plants}/>} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/plants" element={<PlantViews plants={plants}/>} />
            <Route exact path="/plants/:id" element={<PlantDetail setFetchError={setFetchError} setIsLoading={setIsLoading} fetchError={fetchError} isLoading={isLoading}/>} />
            <Route exact path="/admin" element={<Admin plants={plants}/>} />
            <Route exact path="/admin/plantform" element={<PlantForm setPlants={setPlants} plants={plants}/>} />
            <Route exact path="/admin/planttable" element={<PlantTable setPlants={setPlants} plants={plants}/>} />
            <Route exact path="/admin/customertable" element={<CustomerTable />} />
            <Route exact path="/admin/customerform" element={<CustomerForm />} />
            <Route exact path="/allplants" element={<AllPlants plants={plants} setPlants={setPlants} />} />
          </Routes>
        </div>
      }
    </div>
  )};


