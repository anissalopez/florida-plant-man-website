import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PlantSelection({ plants }) {
  const [selectedPlant, setSelectedPlant] = useState('');

 

  return (
    <Box sx={{  marginTop:"150px" }}>
    
     

    </Box>
  );
}












// import Box from '@mui/material/Box';


// export default function PlantSelection({plants}){
//     return(
//         <Box>
//             <label>
//                 <span style={{marginRight:"5px"}}>sortBy</span>
//                 <select onChange={(e)=>console.log(e.target.value)}>
//                     <span></span>

                    
     
//                 </select>
//                 </label>
//                 </Box>
//     )
// }