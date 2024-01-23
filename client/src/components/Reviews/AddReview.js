import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AddReviewContainer } from '../../styles/AddReview.styles';


export default function AddReview(){
    return(
        <AddReviewContainer>
            <Link to={`/reviews`} >
          
                <Button>Leave us a Review</Button>
            </Link>
        </AddReviewContainer>
    )
}