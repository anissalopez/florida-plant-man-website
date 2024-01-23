import * as React from 'react';
import { Link } from "react-router-dom";

import FeaturedPlantList from "./Plants/FeaturedPlantList";
import ReviewList from "./Reviews/ReviewList";
import Header from "./Header";
import DrawerAppBar from "./Nav/Nav";


export default function HomePage ({ plants, handlePlantDetail}) {
    return(
            <main>
                <Header />
                <Link to="/plants">Plants</Link>
                <FeaturedPlantList plants={plants} handlePlantDetail={handlePlantDetail}/>
                <ReviewList />
            </main>
    )};

