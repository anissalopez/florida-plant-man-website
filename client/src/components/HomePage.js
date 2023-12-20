import FeaturedPlantList from "./FeaturedPlantList";
import Header from "./Header";
import DrawerAppBar from "./Nav";



function HomePage ({ plants }) {
    return(
    <div>
    <DrawerAppBar />
    <Header />
    <FeaturedPlantList plants={plants}/>
 
    </div>
    )
  

}

export default HomePage;