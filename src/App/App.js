import React , { useState } from 'react';
import {songData} from '../musicData/songData';
import Layout from '../Components/common/Layout';
import MusicDetails from '../Components/common/MusicDetails';
import MusicController from '../Components/common/MusicController';
import '../assets/css/style.css'
import { Box } from '@mui/system';
import { Routes, Route } from "react-router-dom";

const App = ()=> {
  
  const [allSongs , setAllSongs] = useState(songData)
  const [currentSong , setCurrentSong] = useState(allSongs[0])
  const [currentTime , setCurrentTime] = useState(0);



 return(
 
    <Layout>
    
        <Routes>

            {/*  Music Home Page */}
              <Route 
                path="/" 
                element={<Box >
                            <MusicDetails currentSong={currentSong} />  
                            <MusicController 
                                currentTime={currentTime}
                                setCurrentTime={setCurrentTime}
                                allSongs={allSongs} 
                                currentSong={currentSong} 
                                setCurrentSong={setCurrentSong}/>
                        </Box>}/>
          

            
            {/* All Songs pages */}
            <Route  path="/allSongs" element={<h1>allSongs page</h1>}/>
            <Route  path="/favoriteSongs" element={<h1>favoriteSongs page</h1>}/>
            <Route  path="/mostPlayed" element={<h1>mostPlayed  page</h1>}/>
            <Route  path="/contactUs" element={<h1>contactUs  page</h1>}/>
            <Route  path="/aboutUs" element={<h1>aboutU  page</h1>}/>
            <Route  path="/logOut" element={<h1>logOut  page</h1>}/>
            <Route  path="*" element={<h1>Error 404 page not Found!! </h1>}/>


        </Routes>


    </Layout>

  )
}

export default App;