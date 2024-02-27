import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Colors } from '../../styles/theme/MainTheme';
import { useTheme } from '@mui/material';

import { DrawerHeaderComponent } from '../../styles/Admin/Admin.styles';

export default function DrawerHeader({ setOpen } ){
    const theme = useTheme();
    return (
        <DrawerHeaderComponent>
          <p style={{fontFamily:"Flower", color:Colors.admingreen3, marginRight:"5px"}}>The Florida Plant Man</p>
          <IconButton sx={{backgroundColor:Colors.admingreen1}}onClick={()=>setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeaderComponent>
    );
  };


