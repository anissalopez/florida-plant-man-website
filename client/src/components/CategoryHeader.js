// import styles from "../styles/CategoryHeader.module.css";
import { styled } from '@mui/system';


import { categories } from "./appVariables";


const Main = styled('div')({
    marginTop: "175px",
})

const Container = styled('div')({
    display: "inline-flex",
    gap: "15px",
    alignItems: "baseline"  
})

const Header = styled('div')({
    color: "fff",
    fontSize:"50px",
    height:"50px"
})

const Noun = styled('div')({
    color: "#377E30",
    fontSize: "40px",
    fontWeight: "bold",
    height:"50px"

})

const Pronunciation = styled('div')({
    color: "#6DC01E",
    fontSize:"20px",
    fontWeight:"bold",
    marginBottom:"15px",
    marginTop:"15px"
})

const Definition = styled('div')({
    fontSize:"25px",
    width:"75vw"
})

export default function CategoryHeaders({plantCategory}){
   
        const currentCategory = categories.filter((category)=>{
            if( category.name.toLowerCase() === plantCategory){
                return category
            }
        })

    return(
        <Main> 
            <Container>
                <Header > {currentCategory[0].name}</Header>
                <Noun>noun</Noun>
            </Container> 
            <Pronunciation>{currentCategory[0].pronunciation}</Pronunciation> 
            <Definition>{currentCategory[0].definition}</Definition>
        </Main>
    )
}