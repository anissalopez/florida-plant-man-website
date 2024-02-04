import * as React from 'react';
import { useNavigate } from "react-router-dom";


import Drawer from '@mui/material/Drawer';
import { list } from "./navbarVariables"
import { MainDiv } from '../../styles/Header.styles';
import { Colors } from '../../styles/theme/MainTheme';




export default function NavDrawer({toggleDrawer, state}) {
    const navigate = useNavigate()
    const handleAdminNav = (e) => {
        if (e.target.textContent === "Admin"){
            navigate("/admin")
        }
    }
    const handlePlantNav = (e) =>{    
      if (e.target.textContent === 'All Plants'){
          navigate("/allplants")
      }
    }

  return (
    <div>
        <React.Fragment key="left">

            <Drawer
             sx={{
                "& .MuiPaper-root": {
                 backgroundColor:Colors.white2,
                 color:Colors.fourth,
               
                }
              }}
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}>
            {list("left", toggleDrawer, handleAdminNav, handlePlantNav )}
            </Drawer>
        </React.Fragment>
    </div>
  )};