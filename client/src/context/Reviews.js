import {createContext, useContext, useState, useEffect} from "react";
import { useLoadingContext }from './Loading';
import { useErrorContext } from './Error';

export const ReviewsContext = createContext();

export const useReviewsContext = () => useContext(ReviewsContext);

export const ReviewsProvider = ( { children } ) => {
        const [reviews, setReviews] = useState([]);
        const { loading, setLoading } = useLoadingContext();
        const {error, setError } = useErrorContext();
        
        useEffect(()=> {
        const fetchReviews = async () => {
            try{
                const response = await fetch("/reviews")
                if (!response.ok) throw Error('Error receiving data')
                const reviewList = await response.json()
                setReviews(reviewList)
                setError(null);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchReviews()
        }, [ loading ])
 
    const value = { reviews, setReviews };
    return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
};