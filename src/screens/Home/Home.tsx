import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import Navbar from '../../components/NavBar/NavBar';
import AlbumList from '../../components/AlbumComp/AlbumList';
import {useAlbumContext} from '../../hooks/useAlbumContext';
import DiscoverRelease from './DiscoverRelease';
import {ScrollView} from 'react-native';
import RecentlyPlayed from './RecentlyPlayed';
import Popularplaylists from './Popularplaylists';

const bilie = require('../../../assets/images/home_artist.png');
const line = require('../../../assets/images/Union.png');
const discover = require('../../../assets/images/discover_weekly.jpeg');
const Home: React.FC = () => {
  const {albums, fetchAlbums} = useAlbumContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <AlbumList data={albums} />
          <DiscoverRelease />
          <RecentlyPlayed />
          <Popularplaylists />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    justifyContent: 'flex-start',
    padding:5
  },
});
export default Home;
