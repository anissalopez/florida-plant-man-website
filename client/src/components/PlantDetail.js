import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PlantDetail() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    // Fetch plant details based on the extracted id
    fetch(`/plants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched plant data
        setPlant(data);
      })
      .catch((error) => {
        console.error("Error fetching plant details:", error);
      });
  }, [id]);

  return (
    <div>
      {plant ? (
        <div>
          <h2>Plant Details</h2>
          <p>ID: {plant.id}</p>
          <p>Name: {plant.name}</p>
          <p>Price: {plant.price}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlantDetail;