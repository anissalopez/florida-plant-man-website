import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Colors } from '../../styles/theme/MainTheme';


export default function MenuItemBtn({selected, icon, text, handleNav}){
    return(
        <ListItemButton onClick={()=>handleNav(text)}
            sx={{ ':-khtml-any-link':{
                background:Colors.admingreen3,
                color:Colors.white
                    },
                ...(selected && {
                    background:Colors.light_gray,
                    borderRadius:2,
                    fontWeight:'bold',
                    color:Colors.black
                })
            }}>
        <ListItemIcon sx={{color: selected && Colors.adminorange}}>
            {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    )
  };