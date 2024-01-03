import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import styles from "../styles/PlantDetail.module.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';



function PlantDetail({ plants }) {
  const { id } = useParams();
  const [plant, setPlant] = useState('');
 
  useEffect(() => {
    const fetchPlant = async () => {
      try{
          const response = await fetch(`/plants/${id}`)
        
          if (!response.ok) throw Error('Error receiving data')
          const plantData = await response.json()
          console.log(plantData)
          setPlant(plantData)
          console.log(plant)
          // setFetchError(null)
      }catch(err){
          // setFetchError(err.message)
          console.log(err.message)
      }finally{
          // setIsLoading(false);
      }
    }
    fetchPlant()
  }, [id]);

  
  return (
    <>
    {plant ? 
     <div className={styles.container}>
          <div className={styles.sideimgs}>
            <div style={{background: `url(${plant.image1})`, backgroundSize: "100% 100%"}}></div>
            <div style={{background: `url(${plant.image2})`, backgroundSize: "100% 100%"}}></div>
            <div style={{background: `url(${plant.image3})`, backgroundSize: "100% 100%"}}></div>
        </div>
        <div className={styles.mainimg}>
            <div style={{background: `url(${plant.image1})`, backgroundSize: "100% 100%", padding:"10px"}}></div>
          </div>
        <div className={styles.plantInfo}>
          <h3>{plant.name}</h3>
          <div>
            <WbSunnyIcon />
            <p>{plant.sun}</p>
          </div>
          <div>
            <WaterDropIcon />
            <p>{plant.water}</p>
          </div>
          <div>
            <StraightenIcon />
          </div>
          <p>{plant.price}</p>
          <button>Add to Cart</button>
          </div>
         
     

     </div>
      
     : null}
      </>
  );
}

export default PlantDetail;