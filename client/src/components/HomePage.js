import * as React from 'react';
import FeaturedPlantList from "./FeaturedPlantList";
import Header from "./Header";
import DrawerAppBar from "./Nav";
import { Link } from "react-router-dom";
import {useState} from "react";



function HomePage ({ plants, handlePlantDetail}) {

    return(
    <>
    <DrawerAppBar />
    <Header />
    <Link to="/plants">Plants</Link>
    <FeaturedPlantList plants={plants} handlePlantDetail={handlePlantDetail}/>
    </>
    )
  

}

export default HomePage;