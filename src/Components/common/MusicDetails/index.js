import React from 'react';
import { Box } from '@mui/system';
import {musicDetailsStyle} from './styles.js';
import { Typography } from '@mui/material';


const MusicDetails = ({currentSong}) => {

    return (
        <>
         <Box sx={musicDetailsStyle.wrapper}>
             <Box component={'img'}
              sx={[
                musicDetailsStyle.image,
                {boxShadow: `0px 7px 8px -4px rgb(${currentSong.color} / 20%), 0px 12px 17px 2px rgb(${currentSong.color} / 14%), 0px 5px 22px 4px rgb(${currentSong.color} / 12%)`},
                ]}
              src={`${currentSong.coverUrl}`}>

              </Box>
              
              <Box sx={musicDetailsStyle.text}>
                <Typography sx={musicDetailsStyle.title} variant="h1">{currentSong.artist}</Typography>
                <Typography sx={musicDetailsStyle.subtitle} variant="h5">{currentSong.title}</Typography>
              </Box>
         </Box>
        </> 
    );
}
 
export default MusicDetails;