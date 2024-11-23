import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Album} from '../../model/Albums';

type Props = {
  album: Album;
};
const albumPhoto = require('../../../assets/images/home_artist.png');

const AlbumItem: React.FC<Props> = ({album}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>New Album</Text>
          <Text style={styles.header}>{album.title}</Text>
          <Text style={styles.title}>{album.artist}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={albumPhoto} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#42C83C',
    borderRadius: 35,
    flexDirection: 'row',
    width: windowWidth * 0.9,
    alignSelf: 'center',
    padding: 20,
    marginTop: 20,
    position: 'relative',
    overflow: 'visible', 
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    color: '#FBFBFB',
    marginBottom: 5,
    fontFamily: 'Satoshi-Regular',
  },
  header: {
    fontSize: 20,
    fontFamily: 'Satoshi-Bold',
    color: '#FBFBFB',
    marginBottom: 10,
  },
  imageContainer: {
    position: 'absolute',
    right: 20,
    bottom: 1, 
    zIndex: 10, 
  },
  image: {
    width: 150, 
    height: 150, 
  },
});

export default AlbumItem;
