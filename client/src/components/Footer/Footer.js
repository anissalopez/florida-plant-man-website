import { useLocation, Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from '@mui/material/Container';

import {FooterTitle} from '../../styles/Footer/Footer.styles';
import { Colors } from '../../styles/theme/MainTheme';

export default function Footer(){
    const { pathname } = useLocation();
    if (pathname === "/admin" || pathname === "/admin/messages" 
    || pathname === "/admin/customers" || pathname === "/admin/settings" 
    || pathname === "/admin/products" || pathname === "admin/dashboard"
    || '/admin/addproduct') 
    return null;

    return(
       
                <Box sx={{background:Colors.third, color:Colors.primary,
                    pt:12, 
                    pb:12,
                    opacity:.8,
                    '& a':{
                        textDecoration:"none",
                        color:Colors.primary

                    }}}>
                <Container>
                <Grid container spacing={6} sx={{display:"flex",justifyContent:"center"}}>
                    <Grid item md={12}  xs={12} sx={{textAlign:"left"}}>
                        <FooterTitle variant="body1">About Us</FooterTitle>
                        <Typography sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"18px", lg:"20px"}, pr:3}}>
                            We are a small Green House located in sunny South FLorida 
                            offering unique and tropical plants.   
                            Our commitment is twofold: safe shipping and 
                            exceptional customer service. 
                            We pack each plant with meticulous care to ensure 
                            it arrives at your doorstep in perfect condition and  
                            we prioritize open communication, 
                            always ready to assist with your questions or concerns. 
                        </Typography>
                    </Grid>
                    <Grid item md={6}  xs={12} >
                        <FooterTitle variant='body1'>
                            Information
                        </FooterTitle>
                        <List >
                        <Link key='admin' to={`/admin`} >
                            <ListItemText>
                                <Typography lineHeight={2} sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"18px", lg:"20px"}}}>
                                   Admin Portal
                                </Typography>   
                            </ListItemText>
                        </Link>
                            <ListItemText>
                                <Typography lineHeight={2} sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"18px", lg:"20px"}}}>
                                    Shipping Policy
                                </Typography>   
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"18px",lg:"20px" }}}>
                                    Return Policy
                                </Typography>  
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"18px", lg:"20px"}}}>
                                   FAQ
                                </Typography>    
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item   md={6} xs={12} >
                        <FooterTitle>Contact Us</FooterTitle>
                            <List sx={{pt:0}}>
                                <ListItemText>
                                        <Typography lineHeight={2} sx={{fontFamily:'Monaco', fontSize:{xs:"16px", md:"16px",lg:"20px"}}}>
                                        support@thefloridaplantman.com
                                        </Typography>    
                                    </ListItemText>
                                <ListItemText>
                                        <Typography lineHeight={2} sx={{fontFamily:'Monaco',  fontSize:{xs:"16px", md:"16px", lg:"20px"}}}>
                                        +1 777-777-7777
                                        </Typography>    
                                    </ListItemText>
                            </List>
                            <Box sx={{ color:Colors.primary}}>
                                <InstagramIcon sx={{mr:1}}/>
                                <FacebookIcon sx={{mr:1}}/>
                                <TwitterIcon sx={{mr:1}}/>
                            </Box>
                    </Grid>
                    </Grid>
            
                    </Container>
                </Box>

            
           
    
    )};