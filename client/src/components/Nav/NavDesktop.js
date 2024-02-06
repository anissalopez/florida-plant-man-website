import { Link } from "react-router-dom";

import Actions from "./Actions";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavContainer, NavHeader, NavList} from "../../styles/Nav/Nav.styles";

export default function NavDesktop({matches}){
    return(
       <NavContainer >
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
            </NavList>
                <Actions matches={matches}/>
       </NavContainer>

    )};