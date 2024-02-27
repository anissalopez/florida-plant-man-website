import {createContext, useContext, useState, useEffect} from "react";

export const ReviewsContext = createContext();

export const useReviewsContext = () => useContext(ReviewsContext);



export const ReviewsProvider = ( { children } ) => {
        const [reviews, setReviews] = useState([]);
        
        useEffect(()=> {
        const fetchReviews = async () => {
            try{
                const response = await fetch("/reviews")
                if (!response.ok) throw Error('Error receiving data')
                const reviewList = await response.json()
                setReviews(reviewList)
            }catch(err){
                console.log(err.message)
            }finally{
            }
        }
        fetchReviews()
        }, [])
 
    const value = { reviews, setReviews };

    return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
};