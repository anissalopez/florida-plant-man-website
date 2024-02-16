import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';


export default function PlantFormItems({formik}){
    return(
        <>
        {['name', 'price', 'description', 'water', 'sun', 'qty'].map((value, index) => (
            <Grid item xs={12} key={value}>
              <InputLabel htmlFor={value}>{`${value.charAt(0).toUpperCase()}${value.slice(1)}`}</InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                id={value}
                name={value}
                onChange={formik.handleChange}
                value={formik.values[value]}
              />
              <p style={{ color: 'red' }}>{formik.errors[value]}</p>
            </Grid>
          ))}
        </>
    );
};