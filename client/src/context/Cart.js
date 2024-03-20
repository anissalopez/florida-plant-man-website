import {createContext, useContext, useState, useEffect} from "react";
import { useLoadingContext } from './Loading';
import { useErrorContext }  from './Error';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ( { children } ) => {
        const [cart, setCart] = useState([]);
        const { loading, setLoading } = useLoadingContext()
        const { error, setError } = useErrorContext()
        
        useEffect(()=> {
        const fetchCart = async () => {
            try{
                const response = await fetch('/addtocart')
                if (!response.ok) throw Error('Error receiving data')
                const cartList = await response.json()
                setCart(cartList)
                setError(null);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchCart()
        }, [loading]);
 
   

    const value = { cart, setCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};