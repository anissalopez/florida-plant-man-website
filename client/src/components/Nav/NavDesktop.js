import { Link } from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Actions from "./Actions";
import { NavContainer, NavHeader, NavList} from "../../styles/Nav/Nav.styles";

export default function NavDesktop({matches, toggleCartDrawer}){
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
                    {['All','Alocasia', 'Anthurium', 'Monstera','Philodendron', 'Syngonium' ].map((text) => (
                <Link key={text} to={`/plants/category/${text.toLowerCase()}`}  >
                        <ListItem>
                            <ListItemText primary={text} primaryTypographyProps={{fontSize: '24px'}} />
                        </ListItem>
                </Link>))}
            </NavList>
                <Actions toggleCartDrawer={toggleCartDrawer} matches={matches}/>
       </NavContainer>
    );
};