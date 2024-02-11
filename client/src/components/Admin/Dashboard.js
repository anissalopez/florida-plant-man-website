
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import  IconButton  from "@mui/material/IconButton";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ShowMoreText from "react-show-more-text";
import { Colors } from "../../styles/theme/MainTheme";
import AccessTimeIcon from '@mui/icons-material/AccessTime';




export default function Dashboard({ reviews, setReviews }){

  

    return(
        <div>
        <Typography sx={{mt:7,mb: 4}} variant='h4'>Dashboard</Typography>
            <Grid container gap={2}
             sx={{mt:2, mb:2}}>
                <Grid item sm={5.5} xs={12}
                sx={{backgroundColor:Colors.adminlightblue,
                    borderRadius:"25px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    color:Colors.white
                }}
                
                >
                    <h2>
                        Total Views
                    </h2>
                    <h2>
                        414
                    </h2>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                    
                    >
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>just now</p>
                    </Box>

                </Grid>
                <Grid item sm={5.5} xs={12}
                sx={{backgroundColor:Colors.admingreen3,
                    borderRadius:"25px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    color:Colors.white
                }}
                
                >
                    <h2>
                        Total Visits
                    </h2>
                    <h2>
                        160
                    </h2>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                    
                    >
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>4 hours ago</p>
                    </Box>

                </Grid>
               

            </Grid>
            <Grid container gap={2}
            sx={{mt:2, mb:2}}
            >
            <Grid item sm={5.5} xs={12}
                sx={{backgroundColor:Colors.admindarkblue,
                    borderRadius:"25px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    color:Colors.white
                }}
                
                >
                    <h2>
                        Total Orders
                    </h2>
                    <h2>
                        3
                    </h2>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                    
                    >
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>just now</p>
                    </Box>

                </Grid>
            <Grid item sm={5.5} xs={12}
                sx={{backgroundColor:Colors.adminorange,
                    borderRadius:"25px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    color:Colors.white
                }}
                
                >
                    <h2>
                        Revenue 
                    </h2>
                    <h2>
                        $10,000
                    </h2>
                    <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                    
                    >
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>YTD</p>
                    </Box>

                </Grid>

            </Grid>
         
        </div>
   
    )
}