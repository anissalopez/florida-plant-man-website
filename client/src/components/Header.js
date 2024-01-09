import * as React from 'react';
import image from "../images/main.jpg";
import Button from '@mui/material/Button';


export default function Header(){
    return(
            <header className="image-container">
                <img src={image} />
                <Button sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%" ,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#6DC01E",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: "20px",
                    textAlign: "center",
                    fontFamily:"Flower"
                }}>Explore All Plants</Button>
            </header>
    )};
