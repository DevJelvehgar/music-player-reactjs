import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../Sidebar';


const Layout = (props) => {
    return ( 
        <Grid container>

            <Grid item xs={3}>
                <Sidebar />
            </Grid>

            <Grid item xs={7} px={3} mx={'auto'}>
          
                    {props.children}
        
            </Grid>
    
        </Grid>
    );
}
 
export default Layout;