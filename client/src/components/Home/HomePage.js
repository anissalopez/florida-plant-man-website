import Banner from "../Banner/Banner";
import Promotions from "../Promotions/Promotions"
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

import { Container } from "@mui/material";

import theme from "../../styles/theme/MainTheme";


import { Link } from "react-router-dom";




export default function HomePage ({ plants, matches}) {
    return(
          
            <Container maxWidth="xl" >
                <Banner />
                <Promotions />
                <Products plants={plants} matches={matches} theme={theme}/>
            </Container>

     
         
   
    )};

    
