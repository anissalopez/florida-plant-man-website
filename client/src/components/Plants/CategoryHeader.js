import { categories } from "../AppVariables/appVariables";

import {Header, Main, Container, Noun, Pronunciation, Definition} from "../../styles/CategoryHeaders.styles"


export default function CategoryHeaders({plantCategory}){
   
        const currentCategory = categories.filter((category)=>{
            if( category.name.toLowerCase() === plantCategory){
                return category
            }
            return null
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