import React, { useRef , useEffect, useState } from 'react';
import { ButtonBase, Grid, Slider, Typography } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import {musicControllerStyle} from './style.js';
import { Box } from '@mui/system';

const MusicController = ({allSongs ,  currentSong , setCurrentSong , currentTime , setCurrentTime}) => {

   
    const [playing , setPlaying] = useState(false);
    const [duration , setDuration] = useState(0)
    const audioEl = useRef(null);

  


    const timeFormatter = (value) => {
        
        if(value === 0 ) return " 00:00 ";
        const minute = Math.floor(value / 60);
        const second = (value - minute * 60).toFixed(0);
        return `${minute < 10 ?  `0${minute}` : minute} :${second < 10 ? `0${second}` : second}`;
    }
     
    const playMusic = () => {
      
         audioEl.current.play().then(() =>  {
             setPlaying(true) 
             setDuration(audioEl.current.duration)
         })
    }
  
    const pauseMusic = () => {
        audioEl.current.pause()
        setPlaying(false)
    }

    const changeInputValue = (e) => {
            audioEl.current.currentTime = e.target.value;
            setCurrentTime(e.target.value)
    }
    
    const hendleNextMusic = () => {
            
        let musicID = allSongs.findIndex((song) => song.id === currentSong.id);
      
        ((allSongs.length -1) === musicID) ? setCurrentSong(allSongs[0]) : setCurrentSong(allSongs[++musicID]);
        setCurrentTime(0) 
        
    }
    const hendlePrevMusic = () => {
            
        let musicID = allSongs.findIndex((song) => song.id === currentSong.id);
      
        (musicID === 0) ? setCurrentSong(allSongs[allSongs.length -1]) : setCurrentSong(allSongs[--musicID]);
        setCurrentTime(0) 
        
    }
    useEffect( ()=>{
        document.body.style.backgroundImage = `url('${currentSong.coverUrl}')`;
        if(playing) playMusic()
  
    } , [currentSong] )

    useEffect( ()=>{
        setTimeout(()=>{
                setCurrentTime(audioEl.current.currentTime)
        }, 1000)
    } )
        
    return ( 
        <Grid container  sx={musicControllerStyle.wrapper}>

            <audio 
            ref={audioEl}  
            src={currentSong.songUrl}
            onEnded={hendleNextMusic} >
            </audio>

            <Grid item xs={12} className="musicContorollerContent">
                

                <Slider
                    sx={{  
                        color: `rgb(${currentSong.color})`,

                        '& .MuiSlider-track': {
                        width:  `${(currentTime) / (audioEl?.current?.duration) * 100}% !important `,
                        
                        },
                        '& .MuiSlider-thumb': {
                            left: `${(currentTime) / (audioEl?.current?.duration) * 100}% !important` ,
                          
                            }
                        }}
                   
                    min={0}
                    max={audioEl?.current?.duration }
                    value={currentTime}
                    onChange={changeInputValue}
                    > 
                </Slider>

                <Box className="timer">
                    <Typography>{timeFormatter(currentTime || 0)}</Typography>
                    <Typography>{timeFormatter(duration || 0)}</Typography>
                </Box>

                <Box>
                    <ButtonBase >
                        <FirstPageRoundedIcon sx={{color: `rgb(${currentSong.color})`}} onClick={hendlePrevMusic} />
                    </ButtonBase>

                    <ButtonBase >
                        {
                            playing ?
                            <PauseRoundedIcon sx={{color: `rgb(${currentSong.color})`}} onClick={pauseMusic}/>
                            :
                            <PlayArrowRoundedIcon sx={{color: `rgb(${currentSong.color})`}} onClick={playMusic}/>

                        }
                        
                    </ButtonBase>

                    <ButtonBase >
                        <FirstPageRoundedIcon sx={{color: `rgb(${currentSong.color})`}} onClick={hendleNextMusic} className="nextBtn"/>
                    </ButtonBase>
                </Box>

            </Grid>
        </Grid>
     );
}
 
export default MusicController;
