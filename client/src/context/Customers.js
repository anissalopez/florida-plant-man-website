import {createContext, useContext, useState, useEffect} from "react";

export const CustomersContext = createContext();

export const useCustomersContext = () => useContext(CustomersContext);



export const CustomersProvider = ( { children } ) => {
        const [customers, setCustomers] = useState([]);
       

        useEffect(()=> {
        const fetchCustomers = async () => {
            try{
                const response = await fetch("/customers")
                if (!response.ok) throw Error('Error receiving data')
                const customerList = await response.json()
                setCustomers(customerList)
            }catch(err){
                console.log(err.message)
            }finally{
            }
        }
        fetchCustomers()
        }, [])
 
   

    const value = { customers, setCustomers }

    return <CustomersContext.Provider value={value}>{children}</CustomersContext.Provider>
}