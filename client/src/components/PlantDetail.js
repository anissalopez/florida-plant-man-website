import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import styles from "../styles/PlantDetail.module.css"



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
          <div className={styles.sideleft}>
            <div style={{background: `url(${plant.image1})`, backgroundSize: "100% 100%"}}>1</div>
            <div style={{background: `url(${plant.image2})`, backgroundSize: "100% 100%"}}>2</div>
            <div style={{background: `url(${plant.image3})`, backgroundSize: "100% 100%"}}>3</div>
        </div>
        <div className={styles.main}>
            <div style={{background: `url(${plant.image1})`, backgroundSize: "100% 100%", padding:"10px"}}>4</div>
          </div>
     </div>
      
     : null}
      </>
  );
}

export default PlantDetail;