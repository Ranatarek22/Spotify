import React from 'react';
import {AlbumProvider} from './src/context/AlbumsContext';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/Navigation/AppNav';
import useNotifications from './src/hooks/useNotifications';


const App = () => {
  useNotifications();
  // useEffect(() => {
  //   async function setupPlayer() {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.updateOptions({
  //       stopWithApp: true,
  //       capabilities: [
  //         TrackPlayer.CAPABILITY_PLAY,
  //         TrackPlayer.CAPABILITY_PAUSE,
  //         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  //         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  //         TrackPlayer.CAPABILITY_STOP,
  //       ],
  //       compactCapabilities: [
  //         TrackPlayer.CAPABILITY_PLAY,
  //         TrackPlayer.CAPABILITY_PAUSE,
  //       ],
  //     });

  //     // Add tracks to the queue
  //     await TrackPlayer.add([
  //       {
  //         id: '1',
  //         url: 'https://example.com/song1.mp3', // Replace with your track URL
  //         title: 'Track Title 1',
  //         artist: 'Artist Name 1',
  //         artwork: 'https://example.com/artwork1.png', // Optional
  //       },
  //       {
  //         id: '2',
  //         url: 'https://example.com/song2.mp3',
  //         title: 'Track Title 2',
  //         artist: 'Artist Name 2',
  //         artwork: 'https://example.com/artwork2.png',
  //       },
  //     ]);
  //   }

  //   setupPlayer();

  //   // Cleanup when the component is unmounted
  //   return () => {
  //     TrackPlayer.destroy();
  //   };
  // }, []);

  return (
    <AuthProvider>
      <AlbumProvider>
        <AppNav />
      </AlbumProvider>
    </AuthProvider>
  );
};

export default App;
