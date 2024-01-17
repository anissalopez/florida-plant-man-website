import styles from "../styles/CategoryHeader.module.css";

import { categories } from "./categoryVariables";



export default function CategoryHeaders({plantCategory}){
   
        const currentCategory = categories.filter((category)=>{
            if( category.name.toLowerCase() === plantCategory){
                return category
            }
        })


    return(
        <div className={styles.main}> 
        <div className={styles.container}>
            <div className={styles.header} > {currentCategory[0].name}</div>
            <div className={styles.noun}>noun</div>
        </div> 
            <div className={styles.pronunciation}>{currentCategory[0].pronunciation}</div> 
            <div className={styles.definition}>{currentCategory[0].definition}</div>
        </div>
    )
}