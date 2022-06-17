import { Box } from '@mui/material';
import React from 'react';
import {sidebarStyle} from './style';
import { NavLink } from 'react-router-dom';

const SidebarMenu = ({icon , title , href="#"}) => {
  
    return ( 
        <Box component='li' mx={5} >
            <Box sx={sidebarStyle.svg} >{icon}</Box>
            <NavLink className={(active)=> active.isActive ? 'activeNavLink' : ""} to={href}>{title}</NavLink>
        </Box>
     );
}
 
export default SidebarMenu;