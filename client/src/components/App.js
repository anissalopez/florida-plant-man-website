import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";





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
      <Route exact path="/" element ={<HomePage plants={ plants }/>} />
      
    </Routes>
    </div>


 
  )
}

export default App;
