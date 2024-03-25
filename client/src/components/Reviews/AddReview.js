import { useState } from 'react';

import ReviewForm from './ReviewForm';
import CustomerForm from './CustomerForm';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function AddReview({ open, setOpen }){
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
              <ReviewForm 
                  setOpen={setOpen}
                  setDisplay={setDisplay}
                  display={display}
                
                  />
            }    
          </DialogContent>      
      </Dialog>
  );
};