import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

import { Link } from "react-router-dom";
import PlantViews from "./PlantViews";
import PlantDetail from "./PlantDetail";






function App() {


  const [plants, setPlants] = useState([])

  useEffect(()=> {
    fetch("/plants")
    .then((r) => r.json())
    .then((plants) => setPlants(plants));
  }, [])

 
  

  return(
    <div>
    

    <Routes>
      <Route exact path="/" element ={<HomePage plants={plants}/>} />
      <Route exact path="/plants" element={<PlantViews plants={plants}/>} />
      <Route exact path="/plants/:id" element={<PlantDetail />} />
      
    </Routes>
    </div>


 
  )
}

export default App;
