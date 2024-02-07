import { categories } from "../AppVariables/appVariables";

import {Header, Main, Container, Noun, Pronunciation, Definition} from "../../styles/CategoryHeaders.styles"
import { HeaderContainer } from "../../styles/Products/Products.styles";

export default function ProductCategoryHeaders({plantCategory}){
   
        const currentCategory = categories.filter((category)=>{
            if( category.name.toLowerCase() === plantCategory){
                return category
            }
            return null
        })

    return(
            <HeaderContainer>
            <div className="main-content">
                <div className="category" > {currentCategory[0].name}</div>
                <div className="noun">noun</div>
            </div> 
            <div className='pronunciation'>{currentCategory[0].pronunciation}</div> 
            <div className='definition'>{currentCategory[0].definition}</div>
            </HeaderContainer>
    )
}