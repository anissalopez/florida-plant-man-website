import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuItemBtn from './MenuItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { Colors } from '../../styles/theme/MainTheme';

export default function NavMenu(){
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem ] = useState('');
  
  const handleNav = (item) =>{
      setSelectedItem(item)
    };

    return (
        <List> 
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
          <ListItem  disablePadding onClick={()=>{navigate('/admin/messages')}}>
            <MenuItemBtn text='messages' handleNav={handleNav}
                  selected={selectedItem.includes('messages')}
                  icon={<NotificationsActiveIcon />}/>
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
          <ListItem  disablePadding onClick={()=>{navigate('/admin/settings')}}>
            <MenuItemBtn text='settings' handleNav={handleNav}
                  selected={selectedItem.includes('settings')}
                  icon={<SettingsIcon />}/>
          </ListItem>
    </List>
    )};