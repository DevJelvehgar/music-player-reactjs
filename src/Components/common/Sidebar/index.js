import { Box, Typography } from '@mui/material';
import React from 'react';
import SidebarMenu from './SidebarMenu';
import {icons} from '../../../assets/svg/icons';
import logo from '../../../assets/svg/logo.svg';
import {sidebarStyle} from './style';




const Sidebar = () => {
    return ( 

    <Box component={'section'} sx={sidebarStyle.container}>

        <Box sx={sidebarStyle.profile}>
            <img src={logo} />
            <Typography  variant="h4" px={3}>Hi Reza!</Typography>
        </Box>

        <Box component='ul'>
            <SidebarMenu href="/"  icon={icons.allSongs} title={'Home'} />
            <SidebarMenu href="/allSongs"  icon={icons.allSongs} title={'All Songs'} />
            <SidebarMenu href="/favoriteSongs" icon={icons.favoriteSongs} title={'Favorite Songs'} />
            <SidebarMenu href="/mostPlayed" icon={icons.mostPlayed} title={'Most Played'} />
            <SidebarMenu href="/contactUs" icon={icons.contactUs} title={'Contact Us'} />
            <SidebarMenu href="/aboutUs" icon={icons.aboutUs} title={'About Us'} />
            <SidebarMenu href="/logOut" icon={icons.logOut} title={'Log Out'} />
        </Box> 
    </Box>

    )
}
 
export default React.memo(Sidebar);