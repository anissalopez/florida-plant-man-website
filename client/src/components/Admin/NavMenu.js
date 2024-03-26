import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuItemBtn from './MenuItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';

export default function NavMenu(){
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem ] = useState('');
  
  const handleNav = (item) =>{
      setSelectedItem(item);
    };

    return (
        <List> 
          <ListItem  disablePadding onClick={()=>{navigate('/')}}>
            <MenuItemBtn text='home' handleNav={handleNav}
                  selected={selectedItem.includes('home')}
                  icon={<HomeIcon />}/>
          </ListItem>
          <ListItem  disablePadding onClick={()=>{navigate('/admin/dashboard')}}>
            <MenuItemBtn text='dashboard' handleNav={handleNav}
                  selected={selectedItem.includes('dashboard')}
                  icon={<DashboardIcon />}/>
          </ListItem>
          <ListItem  disablePadding onClick={()=>{navigate('/admin/products')}}>
            <MenuItemBtn text='products' handleNav={handleNav}
                  selected={selectedItem.includes('products')}
                  icon={<ReceiptIcon />}/>        
          </ListItem>  
          
          <ListItem  disablePadding onClick={()=>{navigate('/admin/customers')}}>
            <MenuItemBtn text='customers' handleNav={handleNav}
                  selected={selectedItem.includes('customers')}
                  icon={<GroupsIcon />}/>
          </ListItem>
          <ListItem  disablePadding onClick={()=>{navigate('/admin/reviews')}}>
            <MenuItemBtn text='reviews' handleNav={handleNav}
                  selected={selectedItem.includes('reviews')}
                  icon={<ReviewsIcon />}/>
          </ListItem> 
        </List>
    );
};