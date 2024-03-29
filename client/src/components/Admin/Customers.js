import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

export default function Customers() {
  const customers = useSelector((state) => state.customers.customers);

  return (
    <div>
      <Typography sx={{ mt: 7, mb: 4 }} variant='h4'>Customers</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead> 
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Plants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell>{customer.first_name}</TableCell>
                <TableCell>{customer.last_name}</TableCell>
                <TableCell>
                  {customer.plants.map((plant) => `${plant.name}`).join(", ")}
                </TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>    
    </div>
  );
}
