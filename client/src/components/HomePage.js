import FeaturedPlantList from "./FeaturedPlantList";
import Header from "./Header";
import DrawerAppBar from "./Nav";
import { Link } from "react-router-dom";



function HomePage ({ plants, handlePlantDetail}) {
    return(
    <div>
    
    <DrawerAppBar />
    <Header />
    <Link to="/plants">Plants</Link>
    <FeaturedPlantList plants={plants} handlePlantDetail={handlePlantDetail}/>
 
    </div>
    )
  

}

export default HomePage;