

function PlantViews({plants}){

    const plantList = plants.map((plant) => {
        return(
            <div>{plant.name}</div>
        )

    })
    return(

        <div>
            {plantList}
        </div>
        
    )
}

export default PlantViews;