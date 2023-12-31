import PlantCard from "./PlantCard";

function PlantList({plants}){
    const plantList = plants.map((plant) =>{
        return <PlantCard key={plant.id} name={plant.name} sunlight={plant.sun} water={plant.water} image1={plant.image1} 
        price={plant.price}/>
    })
    return(
        <div>{plantList}</div>
    )
}

export default PlantList;