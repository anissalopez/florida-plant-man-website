import * as React from 'react';
import { useNavigate } from "react-router-dom";


import Drawer from '@mui/material/Drawer';
import { list } from "../AppVariables/navbarVariables"



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
    <div >
        <React.Fragment key="left">
            <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            PaperProps={{
                sx: {
                  backgroundColor: "#f1f1f1",
                }
              }}
          >
            {list("left", toggleDrawer, handleAdminNav, handlePlantNav )}
            </Drawer>
        </React.Fragment>
    </div>
  )};