import React from "react";
import Button from 'react-bootstrap/Button';
import {Card, Container, Col, Row} from 'react-bootstrap';



function FeaturedPlants({ plant }) {


    return (
   
        <Col md={3}>

        <Card className="border-0" >
        <Card.Img height="300" width="100%" variant="top" src={plant.image1} className="card-image rounded mb-0"/>
        <Card.Body>
            <Row className="card-row">
            <Col className="name">{plant.name}</Col>
            <Col className="price">{plant.price}</Col>
            </Row>
          
          <div className="cart-btn-div">
          <Button className="cart-btn mt-2" >Add to Cart</Button>
          </div>
        </Card.Body>
    
      </Card>
      
     
        </Col>
   
      
    );
  }
  export default FeaturedPlants;
  