import { Link } from "react-router-dom";

import Actions from "./Actions";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavContainer, NavHeader, NavList} from "../../styles/Nav/Nav.styles";

export default function NavDesktop({matches}){
    return(
       <NavContainer >
        {/* {useMediaQuery('(min-width:1600px)') ?   <NavHeader>
            The Florida Plant Man
            </NavHeader>: null } */}
            <NavHeader>
            The Florida Plant Man
            </NavHeader>
            <NavList type="row" >
                <Link key="home" to={`/`}  >
                    <ListItem >
                        <ListItemText primaryTypographyProps={{fontSize: '24px'}}primary="Home" />
                    </ListItem>
                </Link>
                <Link key="All Plants" to={"/plants/AllPlants"}  >
                    <ListItem>
                        <ListItemText primary="All" primaryTypographyProps={{fontSize: '24px'}} />
                    </ListItem>
                </Link>
                    {['Alocasia', 'Anthurium', 'Monstera','Philodendron', 'Syngonium' ].map((text) => (
                <Link key={text} to={`/${text.toLowerCase()}`}  >
                        <ListItem>
                        <ListItemText primary={text} primaryTypographyProps={{fontSize: '24px'}} />
                        </ListItem>
                </Link>))}
                {/* <ListItemButton>
                    <ListItemIcon  >
                    <SearchIcon sx={{color:Colors.primary}}/>
                    </ListItemIcon>
                </ListItemButton> */}
        
                {/* <Component>
                <ListItemButton sx={{justifyContent:"center"}}>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center'}}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </ListItemIcon>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center'}}>
                        <FavoriteIcon></FavoriteIcon>
                    </ListItemIcon>
                    <ListItemIcon  sx={{display:'flex', justifyContent:'center'}}>
                        <PersonIcon></PersonIcon>
                    </ListItemIcon>
                </ListItemButton>
                </Component> */}
            </NavList>
                <Actions matches={matches}/>
       </NavContainer>

    )};