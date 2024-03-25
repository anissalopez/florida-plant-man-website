
export const FETCH_PLANTS = 'FETCH_PLANTS'
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANTS_FAILURE';
export const POST_PLANT = 'POST_PLANT';
export const UPDATE_PLANT ='UPDATE_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';



export const fetchPlants = () => async (dispatch, getState) => {

  
  try {
    const response = await fetch(`/plants`)
    if (!response.ok) throw new Error('Error fetching plants');

    const plants = await response.json();

    dispatch({
      type: FETCH_PLANTS,
      payload: plants,
    });
  }  catch (error) {
  dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
}
};

export const postPlant = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/plants', {
      method: "POST",
      mode: "same-origin",
      body: formData
    });
    if (!response.ok) throw new Error('Error adding plant');

    const newPlant = await response.json();
   
    
    dispatch({
      type: POST_PLANT,
      payload: newPlant,
    });
  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
  }
}


export const updatePlant = (formData, id) => async (dispatch) => {
 
  try {
    const response = await fetch(`/plants/${id}`, {
      method: "PATCH",
      mode: "same-origin",
      body: formData
 
    });
    if (!response.ok) throw new Error('Error updating plant');

    const updatedPlant = await response.json();
       
    dispatch({
      type: UPDATE_PLANT,
      payload: updatedPlant,
    });
  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
  }
};

export const deletePlant = (plantInfo) => async (dispatch) => {
  try {
    if (window.confirm("Are you sure?")) {
        const response = await fetch(`/plants/${plantInfo.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) throw new Error('Error deleting plant');
        
      
        dispatch({
          type: DELETE_PLANT,
          payload: plantInfo
        });
    }

  } catch (error) {
    dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
  }
};



