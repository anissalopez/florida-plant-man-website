import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { DashboardBox, DashboardGridItem } from '../../styles/Admin/Admin.styles';

export default function Dashboard(){
    return(
        <div>
            <Typography sx={{mt:7,mb: 4}} variant='h4'>Dashboard</Typography>
            <Grid container gap={2}
             sx={{mt:2, mb:2}}>
                <DashboardGridItem item sm={5.5} xs={12} primary>
                    <h2>Total Views</h2>
                    <h2>414</h2>
                    <DashboardBox>
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>just now</p>
                    </DashboardBox>
                </DashboardGridItem>
                <DashboardGridItem item sm={5.5} xs={12} secondary>
                    <h2>
                        Total Visits
                    </h2>
                    <h2>
                        160
                    </h2>
                    <DashboardBox>
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>4 hours ago</p>
                    </DashboardBox>
                </DashboardGridItem>
            </Grid>
            <Grid container gap={2} sx={{mt:2, mb:2}}>
                <DashboardGridItem item sm={5.5} xs={12} tertiary>
                        <h2>Total Orders</h2>
                        <h2>3</h2>
                        <DashboardBox>
                            <AccessTimeIcon></AccessTimeIcon>
                            <p>just now</p>
                        </DashboardBox>
                </DashboardGridItem>
                <DashboardGridItem item sm={5.5} xs={12}>
                    <h2>Revenue</h2>
                    <h2>$10,000</h2>
                    <DashboardBox>
                        <AccessTimeIcon></AccessTimeIcon>
                        <p>YTD</p>
                    </DashboardBox>
                </DashboardGridItem>
            </Grid> 
        </div>
    );
};