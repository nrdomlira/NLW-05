import { createContext } from 'react';

type Episode = {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    duration: Number;
    durationAsString: string;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    Play: (episode: Episode) => void;
    setPlayingState: (state: boolean) => void
    togglePlay: () => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

