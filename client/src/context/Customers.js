import {createContext, useContext, useState, useEffect} from "react";
import{ useLoadingContext }  from './Loading';
import { useErrorContext } from './Error';

export const CustomersContext = createContext();

export const useCustomersContext = () => useContext(CustomersContext);

export const CustomersProvider = ( { children } ) => {
        const [customers, setCustomers] = useState([]);

        const { loading, setLoading } = useLoadingContext()
        const { error, setError } = useErrorContext()
        
        useEffect(()=> {
            const fetchCustomers = async () => {
                try{
                    const response = await fetch("/customers")
                    if (!response.ok) throw Error('Error receiving data')
                    const customerList = await response.json()
                    setCustomers(customerList)
                    setError(null);
                    }catch(err){
                        setError(err.message);
                    }finally{
                        setLoading(false);
                    }
            }
        fetchCustomers()
        }, [ loading ]);
 
   

    const value = { customers, setCustomers };

    return <CustomersContext.Provider value={value}>{children}</CustomersContext.Provider>
};