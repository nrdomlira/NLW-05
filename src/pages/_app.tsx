import React, { useState } from 'react';
import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  function Play(episode){
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0);
  }

  function togglePlay(){
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean){
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, Play, isPlaying, togglePlay, setPlayingState}}>
      <div className={styles.wrapper}>

        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
