import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SongItem = ({song}: {song: any}) => (
  <View style={styles.songContainer}>
    <Image source={{uri: song.image_url}} style={styles.songs} />
    <View style={styles.songDetails}>
      <Text style={styles.songTitle}>{song.title}</Text>
      <Text style={styles.songArtist}>{song.artist}</Text>
    </View>
    <Text style={styles.duration}>{song.duration_seconds || 'N/A'}</Text>
    <TouchableOpacity>
      <Icon name="more-horiz" size={25} color="#545454" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  songContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  songs: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  songDetails: {
    marginLeft: 15,
    flex: 1,
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  songArtist: {
    color: '#7d7d7d',
  },
  duration: {
    color: '#000',
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default SongItem;
