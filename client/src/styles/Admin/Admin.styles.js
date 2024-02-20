import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputBase from "@mui/material/InputBase";
import MuiAppBar from "@mui/material/AppBar";

import { Colors } from "../theme/MainTheme";

export const DashboardGridItem = styled(Grid, {
    shouldForwardProp: (prop) => prop !== "primary" && prop !== 'secondary' && prop !== 'tertiary'
  })(({ primary, secondary, tertiary }) => ({
    backgroundColor: primary ? Colors.adminlightblue : 
                     secondary ? Colors.admingreen3 : 
                     tertiary ? Colors.admindarkblue : Colors.adminorange,
    color: Colors.white,
    borderRadius:"25px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
                    
  }));

export const DashboardBox = styled(Box)({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
});



export const Search = styled('div')(({ theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: Colors.white,
  '&:hover': {
    backgroundColor: Colors.adminlightblue,
  },
  marginLeft: '10px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: Colors.black,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - 240px)`,
    marginLeft: `240px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));