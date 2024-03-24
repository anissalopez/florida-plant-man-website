import { DELETE_PLANT, FETCH_PLANTS, FETCH_PLANTS_FAILURE, UPDATE_PLANT} from "../actions/plantsActions";

const initialState = {
  plants: [],
  loading: true,
  error: null,
};

function plantsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLANTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PLANTS:
      return { ...state, plants: action.payload, loading:false };
    case UPDATE_PLANT:
       const newPlantArray = state.plants.map((plant) => {
            if(plant.id === action.payload.id) {
                return {
                  ...plant,
                  ...action.payload
                };
              } else {
                return plant;
              };
            });
      return {...state,plants:newPlantArray, loading:false};
    case DELETE_PLANT:
      const updatedPlants = state.plants.filter((plant)=>plant.id !== action.payload.id)
      return {...state, plants: updatedPlants, loading:false};
    default:
      return state;
  }
}

export default plantsReducer;

