import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {Track} from 'react-native-track-player';
import {populatePlayListData, playListData} from '../data/PlayedData'; 

interface SongsContextType {
  songs: Track[]; 
  fetchSongsData: () => Promise<void>; 
}

const SongsContext = createContext<SongsContextType | undefined>(undefined);

export const SongsProvider = ({children}: {children: ReactNode}) => {
  const [songs, setSongs] = useState<Track[]>([]);

  const fetchSongsData = async () => {
    try {
      await populatePlayListData(); 
      if (playListData.length > 0) {
        const formattedSongs = playListData.map(song => ({
          id: song.id.toString(),
          url: song.url,
          title: song.title,
          artist: song.artist,
          artwork: song.artwork,
          duration: song.duration,
        }));
        setSongs(formattedSongs); 
        console.log('Songs fetched and added:', formattedSongs);
      } else {
        console.log('No songs available.');
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    fetchSongsData(); 
  }, []);

  return (
    <SongsContext.Provider value={{songs, fetchSongsData}}>
      {children}
    </SongsContext.Provider>
  );
};

export const useSongs = () => {
  const context = React.useContext(SongsContext);
  if (!context) {
    throw new Error('useSongs must be used within a SongsProvider');
  }
  return context;
};
