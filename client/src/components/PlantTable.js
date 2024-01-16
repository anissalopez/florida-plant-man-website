import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'qty', headerName: 'Quantity', width: 130 },
  { field: 'water', headerName: 'Water Req.', width: 130 },
  { field: 'sun', headerName: 'Sun Req.', width: 130 },
  { field: 'image1', headerName: 'Image URL', width: 130 },
  { field: 'image2', headerName: 'Image URL', width: 130 },
  { field: 'image3', headerName: 'Image URL', width: 130 },
  
];


export default function PlantTable({plants}) {

  return (


    <div style={{ height: 400, width: '100%', marginTop:"200px" }}>
      <DataGrid
        rows={plants}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

  );
}