import { styled } from '@mui/system';
import Box from '@mui/material/Box';


export const BoxBackground = styled(Box)({
    backgroundColor: "#000",
    height:"30vh",
    width:"75vw"
})

export const MainContent = styled(Box)({
    display:"flex",
    flexDirection:"row",
    margin: "0 -60px",
    justifyContent:"center",
    marginTop:"-75px",
    color:"#f1f1f1"
})

export const BoxContent = styled(Box)({
    height: "150px",
    width: "175px",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(#6DC01E, #BED500)",
    margin: "0 60px"
})

export const Header = styled('p')({
    fontSize:"24px",
    textAlign:"center"
})

export const IconContainer = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"90px",
    marginLeft: "10px"
})
