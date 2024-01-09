import * as React from 'react';
import { Link } from "react-router-dom";

import FeaturedPlantList from "./FeaturedPlantList";
import ReviewList from "./ReviewList";
import Header from "./Header";
import DrawerAppBar from "./Nav";


export default function HomePage ({ plants, handlePlantDetail}) {
    return(
            <main>
                <Header />
                <Link to="/plants">Plants</Link>
                <FeaturedPlantList plants={plants} handlePlantDetail={handlePlantDetail}/>
                <ReviewList />
            </main>
    )};

