import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { ReviewContainer, ReviewName} from '../../styles/Review/Review.styles';

const Review = ({ review }) => {
    return (
        <Grid item xs={12} sm={4}>             
            <ReviewContainer>
                <Rating name="read-only" 
                    value={review.rating} size="large"
                    sx={{color: "#6DC01E"}}
                    readOnly
                         />
                <h3 >{review.comment}</h3>
                <ReviewName>- {review.customer['first_name']} {review.customer['last_name']}</ReviewName>
            </ReviewContainer>
        </Grid>
    );
};
export default Review;
  