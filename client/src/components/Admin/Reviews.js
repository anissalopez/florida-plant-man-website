
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Reviews({ reviews }){
    return(
        <div>
            <Typography sx={{mt:7,mb: 4}} variant='h4'>Reviews</Typography>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead > 
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Comment</TableCell>
                        <TableCell>Plant Name</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {reviews.map((review) => (
                    <TableRow
                        key={review.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                        <TableCell
                            sx={{width:"30%"}}
                            >
                                
                            {`${review.customer['first_name']} ${review.customer['last_name']}`}    
                        </TableCell>
                        <TableCell>{review.rating}</TableCell>
                        <TableCell >{review.comment}</TableCell>
                        <TableCell >{review.plant['name']}</TableCell>      
                    </TableRow>
                    ))} 
                    </TableBody>
                </Table>
            </TableContainer>  
        </div>
    );
};