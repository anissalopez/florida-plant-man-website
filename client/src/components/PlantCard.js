import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function PlantCard({image1, name, sunlight, water, price}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price:{price}
            Sunlight:{sunlight}
            Water: {water}
          </Card.Text>
          <div>
          <Button >Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  export default PlantCard;
  