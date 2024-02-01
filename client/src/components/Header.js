import * as React from 'react';

import Button from '@mui/material/Button';

import { ExploreButton } from '../styles/Header.styles';
import { MainDiv } from '../styles/Header.styles';
import { Main } from '../styles/CategoryHeaders.styles';
import image from "../images/background_image.webp"



export default function Header(){
    return(
            <MainDiv>
                <div className="left">
                    <div>
                        <h1>
                            The Florida Plant Man
                        </h1>
                        <h2>
                            Your Source for Variegated Tropical House Plants.
                        </h2>
                    <ExploreButton>Explore All Plants</ExploreButton>
                    </div>
                </div>
                    <div className="right">
                    <img src={image}></img>
                    </div> 
                </MainDiv>

               
            
  
    )};
    {/* <ExploreButton>Explore All Plants</ExploreButton> */}