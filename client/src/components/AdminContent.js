import Box from "@mui/material/Box";
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { RiPlantFill } from "react-icons/ri";

import { styled } from '@mui/system';


const BoxBackground = styled(Box)({
    backgroundColor: "#d3d3d3",
    height:"30vh",
    width:"75vw"
})

const MainContent = styled(Box)({
    display:"flex",
    flexDirection:"row",
    margin: "0 -60px",
    justifyContent:"center",
    marginTop:"-75px",
    color:"#f1f1f1"
})

const BoxContent = styled(Box)({
    height: "150px",
    width: "175px",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(#6DC01E, #BED500)",
    margin: "0 60px"
})

const Header = styled('p')({
    fontSize:"24px",
    textAlign:"center"
})

const IconContainer = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"90px",
    marginLeft: "10px"
})

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
    )
}