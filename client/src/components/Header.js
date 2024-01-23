import * as React from 'react';
import image from "../images/main.jpg";
import Button from '@mui/material/Button';

import { ExploreButton } from '../styles/Header.styles';


export default function Header(){
    return(
            <header sytle={{position:"relative"}}>
                <img src={image} />
                <ExploreButton>Explore All Plants</ExploreButton>
            </header>
    )};
