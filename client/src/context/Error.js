import {createContext, useContext, useState} from "react";

export const ErrorContext = createContext();

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider = ( { children } ) => {
    const [ error, setError] = useState(null);

    const value = { error, setError };
    
    return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
};