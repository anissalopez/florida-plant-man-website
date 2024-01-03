import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import styles from "../styles/PlantDetail.module.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import Loading from "./Loading";


function PlantDetail({ setFetchError, setIsLoading, isLoading}) {
  const { id } = useParams();
  const [plant, setPlant] = useState('');
 
  useEffect(() => {
    const fetchPlant = async () => {
        try{
            const response = await fetch(`/plants/${id}`)
            if (!response.ok) throw Error('Error receiving data')
            const plantData = await response.json()
            setPlant(plantData)
            setFetchError(null)
        }catch(err){
            setFetchError(err.message)
        }finally{
            setIsLoading(false);
        }
      }
        fetchPlant()
  }, [id]);

  const displayStyle = (img) => {
    return{
     backgroundImage: `url(${img})`,
     width:"100%",
     height:"100%"
    }

  }

  
  return (
    <>
      {isLoading && <Loading />}
    {
     <div className={styles.container}>
        <div className={styles.sideimgs}>
            {/* <div style={displayStyle(plant.image1)}></div>
            <div style={displayStyle(plant.image1)}></div>
            <div style={displayStyle(plant.image1)}></div> */}
            <div><img  src={plant.image1} /></div>
            <div><img  src={plant.image1} /></div>
            <div><img  src={plant.image1} /></div>
            {/* <img  src={plant.image1} /> */}
            {/* <img  src={plant.image1} />
            <img  src={plant.image1} /> */}
            
        </div>
        <div className={styles.mainimg}>
            {/* <div style={displayStyle(plant.image1)}></div> */}
            <img style={styles.main} src={plant.image1} />
        </div>
        <div className={styles.plantInfo}>
            <h2>{plant.name}</h2>
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
            <h3 className={styles.plantInfo.price}>$ {plant.price}</h3>
            <button>Add to Cart</button>
          </div>
     </div>
     }
    </>
  );
}

export default PlantDetail;