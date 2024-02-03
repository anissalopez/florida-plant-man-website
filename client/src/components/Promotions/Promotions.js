import { PromotionsContainer, Message } from "../../styles/Promotions/Promotions.style";
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import {useState, useEffect, useRef} from "react";

const messages = [
    "20% off on your first order", "Summer sale starts now!", "Please like and subscribe"
]

export default function Promotions(){
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)

        }, 3000)
        const intervalId = setInterval(()=>{
            setMessageIndex(i => (i + 1) % messages.length)
            setShow(true)
            setTimeout(()=>{
                setShow(false)
    
            }, 3000)

        }, 4000)
        return () =>{
            clearInterval(intervalId)
        }

    },[])
    return(
   
        <PromotionsContainer ref={containerRef}>
            <Slide 
                container={containerRef.current}
                direction={show ? "left" : "right"}
                in={show}
                timeout={{
                    enter:500,
                    exit:100
                    }}
                >
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Message>
                        {messages[messageIndex]}
                    </Message>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}