import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import StraightenIcon from '@mui/icons-material/Straighten';
import PlantBanner from "./PlantBanner";
import styles from "../styles/PlantDetail.module.css";



function PlantDetail({ setFetchError, setIsLoading, isLoading, fetchError}) {
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
     backgroundImage: `url(${img})`
    }

  }

  
  return (
    <>

    {!fetchError && !isLoading &&
    <>
      <section className={styles.container}>
        <div className={styles.sideimgs}>
            <div><img  src={plant.image1} alt="displayPlant1"/></div>
            <div><img  src={plant.image2} alt="displayPlant2"/></div>
            <div><img  src={plant.image3} alt="displayPlant3"/></div>
        </div>
        <div className={styles["main-plant-image"]}>
            <div>
            <img  alt="displayPlant1" src={plant.image1} />
            </div> 
        </div>
        <div className={styles["plant-info"]}>
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
              <p>4 inch pot</p>
          </div>
            <h3>$ {plant.price}</h3>
            <button>Add to Cart</button>
          </div>
      </section>
      <PlantBanner plant={plant}/>
    </>
    }
    </>
  );
}

export default PlantDetail;