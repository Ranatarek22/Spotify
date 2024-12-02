import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useSongs} from '../../context/SongsContext';
import SongInfo from '../../components/SongsComp/SongInfo';
import SongSlider from '../../components/SongsComp/SongSlider';
import ControlCenter from '../../components/SongsComp/ControlCenter';
import {setupPlayer, setupRepeatMode} from '../../../PlayerService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamAuthList} from '../../model/RootStackParamAuthList';

const {width} = Dimensions.get('window');

const MusicPlayer = () => {
  const {songs} = useSongs();
  const [track, setTrack] = useState<Track | null>(null);


  const route = useRoute<RouteProp<RootStackParamAuthList, 'musicplayer'>>();
  const {selectedSong} = route.params || {};

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    if (
      event.type === Event.PlaybackActiveTrackChanged &&
      event.index !== undefined
    ) {
      const playingTrack = await TrackPlayer.getTrack(event.index);
      setTrack(playingTrack ?? null);
    }
  });

  useEffect(() => {
    const initializePlayerAndPlaySong = async () => {
      try {
        const isInitialized = await setupPlayer();
        if (isInitialized) {
          if (selectedSong) {
            await TrackPlayer.reset();

            await TrackPlayer.add(songs);

            const selectedSongIndex = songs.findIndex(
              song => song.id.toString() === selectedSong.id.toString(),
            );
            if (selectedSongIndex !== -1) {
              await TrackPlayer.skip(selectedSongIndex);
              console.log('Selected song added and playing.');
              await TrackPlayer.play();
            }
          }

          await setupRepeatMode();
        }
      } catch (error) {
        console.error('Error initializing and playing selected song:', error);
      }
    };

    if (selectedSong) {
      initializePlayerAndPlaySong();
    }
  }, [selectedSong, songs]);


  if (!selectedSong) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No song selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  errorText: {
    fontSize: 18,
    color: '#fff',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
  },
});

export default MusicPlayer;
