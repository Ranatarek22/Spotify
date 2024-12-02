import React from 'react';
import {AlbumProvider} from './src/context/AlbumsContext';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/Navigation/AppNav';
import useNotifications from './src/hooks/useNotifications';
import { SongsProvider } from './src/context/SongsContext';


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
        <SongsProvider>
          <AppNav />
        </SongsProvider>
      </AlbumProvider>
    </AuthProvider>
  );
};

export default App;
// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import TrackPlayer, {
//   Capability,
//   usePlaybackState,
//   State as TrackPlayerState,
//   Track,
//   useTrackPlayerEvents,
//   Event,
// } from 'react-native-track-player';

// const tracks: Track[] = [
//   {
//     id: '1',
//     url: require('./assets/audio/one.mp3'),
//     title: 'Song 1',
//     artist: 'Artist 1',
//     artwork: require('./assets/images/song1.png'),
//   },
//   {
//     id: '2',
//     url: require('./assets/audio/two.mp3'),
//     title: 'Song 2',
//     artist: 'Artist 2',
//     artwork: require('./assets/images/song2.png'),
//   },
//   {
//     id: '3',
//     url: require('./assets/audio/three.mp3'),
//     title: 'Song 3',
//     artist: 'Artist 3',
//     artwork: require('./assets/images/song3.png'),
//   },
// ];
// const App: React.FC = () => {
//   const playbackState = usePlaybackState();
//   const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

//   useEffect(() => {
//     const setupPlayer = async () => {
//       // Initialize the player
//       await TrackPlayer.setupPlayer();

//       // Add tracks to the player
//       await TrackPlayer.add(tracks);

//       // Configure player options
//       TrackPlayer.updateOptions({
//         // androidStopApp: true, // Stops playback when the app is closed
//         capabilities: [
//           Capability.Play,
//           Capability.Pause,
//           Capability.SkipToNext,
//           Capability.SkipToPrevious,
//         ],
//         compactCapabilities: [
//           Capability.Play,
//           Capability.Pause,
//           Capability.SkipToNext,
//           Capability.SkipToPrevious,
//         ],
//       });

//       // Start playing
//       await TrackPlayer.play();
//     };

//     setupPlayer();

//     // Clean up TrackPlayer when the component unmounts
//     return () => {
//       TrackPlayer.reset(); // Use reset instead of destroy
//     };
//   }, []);

//   // Track playback state changes (e.g., current track or position)
//   useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async () => {
//     const trackId = await TrackPlayer.getCurrentTrack();
//     if (trackId !== null) {
//       const track = tracks.find(t => t.id === trackId);
//       setCurrentTrack(track || null);
//     }
//   });

//   const togglePlayback = async () => {
//     if (playbackState?.state === TrackPlayerState.Playing) {
//       await TrackPlayer.pause();
//     } else {
//       await TrackPlayer.play();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {currentTrack && (
//         <>
//           <Image source={{uri: currentTrack.artwork}} style={styles.artwork} />
//           <Text style={styles.title}>{currentTrack.title}</Text>
//           <Text style={styles.artist}>{currentTrack.artist}</Text>
//         </>
//       )}
//       <View style={styles.controls}>
//         <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
//           <Text style={styles.button}>Previous</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={togglePlayback}>
//           <Text style={styles.button}>
//             {playbackState?.state === TrackPlayerState.Playing
//               ? 'Pause'
//               : 'Play'}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
//           <Text style={styles.button}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#121212',
//   },
//   artwork: {
//     width: 300,
//     height: 300,
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 24,
//     color: 'white',
//     marginVertical: 8,
//   },
//   artist: {
//     fontSize: 18,
//     color: 'gray',
//   },
//   controls: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   button: {
//     color: 'white',
//     fontSize: 18,
//     marginHorizontal: 10,
//   },
// });

// export default App;
