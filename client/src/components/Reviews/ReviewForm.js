import { useDispatch, useSelector } from 'react-redux';
import { postReview } from '../../actions/reviewActions';


import { useFormik } from "formik";
import * as yup from "yup";

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { FormContainer, ButtonContainer } from '../../styles/Review/Review.styles';
import { Colors } from "../../styles/theme/MainTheme";


export default function ReviewForm({setOpen, setDisplay, display }){
  const dispatch = useDispatch();

  const plants = useSelector(state => state.plants.plants);



    const formSchema = yup.object().shape({
        rating: yup.number().required("Must select review"),
        comment: yup.string().min(5).max(500).required("Must enter comment")
        });
      
    const formik = useFormik({
          initialValues: {
            rating: 0,
            comment:'',
            plant_id:'',
            customer_id: 0
          },
          validationSchema: formSchema, 
          onSubmit: async (values) => {
   
         
            try{
              const review = {
                    ...values, customer_id:display.customerId, rating: values['rating']
                }
         
                dispatch(postReview(review))
                //dispatch(updateCustomer(display.customerId, values.plant_id))
                
                setOpen(false)
                setDisplay({...display, screen:"customer-name", customerId:null})
              }
          catch(err){
              console.message(err)
          }
                
             
  }});

    return(
        <div>
          <FormContainer component="form" onSubmit={formik.handleSubmit}>
              <h2>Which of our Plant Companions did you take home?</h2>
                    <Select
                      labelId="select-plant"
                      id="plant_id"
                      name="plant_id"
                      onChange={formik.handleChange}
                      value={formik.values["plant_id"]}>
                        {
                          plants.map((plant) =>{
                              return(
                                  <MenuItem fullWidth key={plant.id} 
                                    value={plant.id}>
                                    {plant.name}
                                  </MenuItem>)})
                        }
                    </Select>
              <h2>Please tell us about your experience with your purchase.</h2>
                   <TextField
                      id="comment"
                      name="comment"
                      fullWidth                    
                      value={formik.values["comment"]}
                      onChange={formik.handleChange}     
                    />
                  <p>{formik.errors['comment']}</p>   
                  <h2
                    style={{marginTop:0}}>
                      We aim to earn your 5-star rating, please tell us how we did!</h2>
                    <Rating
                      id="rating"
                      name="rating"
                      type="number"
                      value={Number(formik.values["rating"])}
                      onChange={formik.handleChange}
                      sx={{fontSize:"40px", color:Colors.fourth}}
                    />
                  <p>{formik.errors['rating']}</p>
                <ButtonContainer>
                    <Button className="cancel-button"
                            onClick={()=>{
                            setOpen(false)
                            setDisplay({...display, screen:"customer-name", customerId:null})
                            }}
                          >
                      Cancel
                    </Button>
                    <Button 
                      className="next-button"
                      type="submit">
                      Submit
                    </Button>
                </ButtonContainer>
                </FormContainer >
        </div>
    );
  };