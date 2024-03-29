import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import ReviewList from "../Reviews/ReviewList";

import Container from "@mui/material/Container";

import theme from "../../styles/theme/MainTheme";


export default function HomePage ({ matches, reviews, setReviews}) {

    return(   
            <Container maxWidth="xl" >
                <Banner />
                <Products  matches={matches} theme={theme} />
                <ReviewList reviews={reviews} setReviews={setReviews}/>
            </Container>       
    );
};

    
