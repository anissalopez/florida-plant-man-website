import {createContext, useContext, useState, useEffect} from "react";

import { useLoadingContext }   from "./Loading";
import { useErrorContext } from "./Error";

export const PlantContext = createContext();

export const usePlantsContext = () => useContext(PlantContext);

export const PlantProvider = ( { children } ) => {
        const [plants, setPlants] = useState([]);
        const { loading, setLoading } = useLoadingContext();
        const {error, setError } = useErrorContext();

        useEffect(()=> {
            const fetchPlants = async () => {
                    try{
                        const response = await fetch("/plants");
                        if (!response.ok) throw Error('Error receiving data');
                        const plantList = await response.json();
                        setPlants(plantList);
                        setError(null);
                    }catch(err){
                        setError(err.message);
                    }finally{
                        setLoading(false);
                    }
                };
                fetchPlants();
            }, [ loading ]);
 
   

    const value = { plants, setPlants };

    return <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
};