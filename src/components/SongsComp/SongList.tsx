import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import SongItem from './SongItem';

const SongList = ({songs, loading}: {songs: any[]; loading: boolean}) => (
  <ScrollView
    style={styles.songsLists}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}>
    <Text style={styles.titleSongs}>PUBLIC PLAYLISTS</Text>
    {loading ? (
      <ActivityIndicator size="large" color="#000" />
    ) : (
      songs.map(song => <SongItem key={song.id} song={song} />)
    )}
  </ScrollView>
);

const styles = StyleSheet.create({
  songsLists: {
    padding: 20,
  },
  titleSongs: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SongList;
