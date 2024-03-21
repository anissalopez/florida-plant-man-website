import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import ReviewList from "../Reviews/ReviewList";

import Container from "@mui/material/Container";

import theme from "../../styles/theme/MainTheme";


export default function HomePage ({ plants, matches, reviews, setReviews, addToCart}) {

    return(   
            <Container maxWidth="xl" >
                <Banner />
                <Products plants={plants} matches={matches} theme={theme} addToCart={addToCart}/>
                <ReviewList reviews={reviews} setReviews={setReviews} plants={plants}/>
            </Container>       
    );
};

    
