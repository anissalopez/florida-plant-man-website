import { useState } from 'react';

import ReviewForm from './ReviewForm';
import CustomerForm from './CustomerForm';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function AddReview({ open, plants, setOpen, reviews, setReviews }){
    const [display, setDisplay] = useState({
        screen:"customer-name",
        customerId:null    
    });
    return(
        <Dialog open={open} fullWidth maxWidth="lg"> 
          <DialogContent>
            {display.screen === 'customer-name' &&
              <CustomerForm setOpen={setOpen} setDisplay={setDisplay} 
              display={display}/>
            }
            {display.screen === 'review-form' && 
              <ReviewForm plants={plants} 
                  setOpen={setOpen}
                  customerId={display.customerId} 
                  setDisplay={setDisplay}
                  display={display}
                  reviews={reviews}
                  setReviews={setReviews}
                  />
            }    
          </DialogContent>      
      </Dialog>
  );
};