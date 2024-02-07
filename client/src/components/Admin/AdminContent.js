import Box from "@mui/material/Box";
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { RiPlantFill } from "react-icons/ri";

import {MainContent, IconContainer, BoxBackground, BoxContent, Header} from "../../styles/Admin/AdminContent.styles"

export default function AdminContent({customers, plants}){
    return(
        <Box>
            <BoxBackground ></BoxBackground>
                <MainContent>
                    <BoxContent>
                        <Header>Plants</Header>
                        <IconContainer>
                            <RiPlantFill fontSize="30px"/>
                            <p>{plants.length}</p>
                        </IconContainer>
                    </BoxContent>
                    <BoxContent>
                        <Header>Customers</Header>
                        <IconContainer>
                            <PersonRoundedIcon fontSize="large"/>
                            <p>{customers.length}</p>
                        </IconContainer>
                    </BoxContent>
                    <BoxContent>
                        <Header>Orders</Header>
                        <IconContainer>
                            <LocalShippingRoundedIcon fontSize="large"/>
                            <p>{customers.length}</p>
                        </IconContainer>
                    </BoxContent>
            </MainContent>
        </Box>
    )};