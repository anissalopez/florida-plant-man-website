import {createContext, useContext, useState} from "react";

export const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ( { children } ) => {
    const [ loading, setLoading ] = useState(true)
   

    const value = { loading, setLoading }

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}