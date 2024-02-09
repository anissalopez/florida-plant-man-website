import { styled, useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Colors } from '../../styles/theme/MainTheme';




export const DrawerHeaderComponent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    backgroundColor:Colors.admindarkblue,
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
   
  }));

  export default function DrawerHeader({ handleDrawerClose} ){
    const theme = useTheme();
    return (
        <DrawerHeaderComponent>
          <p style={{fontFamily:"Flower", color:Colors.admingreen3, marginRight:"5px"}}>The Florida Plant Man</p>
          <IconButton sx={{backgroundColor:Colors.admingreen1}}onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeaderComponent>
    )
  };


