import React from "react";
import FeaturedPlantCard from "./FeaturedPlantCard";
import { Row } from "react-bootstrap";

function FeaturedPlantList({plants}){
    const featured_plants = plants.slice(-4).map((plant) => {
        return <FeaturedPlantCard plant={plant} key={plant.id}/>   
     });
    return(
        <Row>{featured_plants}</Row>
    )
}

export default FeaturedPlantList;