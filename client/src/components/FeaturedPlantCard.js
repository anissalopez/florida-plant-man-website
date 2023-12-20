import * as React from 'react';
import Button from 'react-bootstrap/Button';
import {Card, Container, Col, Row} from 'react-bootstrap';




function FeaturedPlants({ plant }) {


    return (
   
        <Col md={3}>
    

        <Card className="featured-plant border-0" >
  
        <Card.Img  variant="top" src={plant.image1} className="featured-images  rounded mb-0"/>
        <Card.Body>
            <Row className="card-row">
            <Col className="featured-plant-name">{plant.name}</Col>
            <Col className="featured-plant-price">{plant.price}</Col>
            </Row>
          
          <div className="add-to-cart-div">
          <Button className="add-to-cart-btn mt-2" >Add to Cart</Button>
          </div>
        </Card.Body>
    
      </Card>
      
     
        </Col>
   
      
    );
  }
  export default FeaturedPlants;
  