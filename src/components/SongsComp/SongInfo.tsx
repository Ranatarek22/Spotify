import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Track} from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

const SongInfo = ({track}: SongInfoProps) => {
  // Use a fallback image if track?.image_url is not available
  const imageUrl = track?.artwork ?? 'https://example.com/default-image.png'; // Replace with your default image URL

  return (
    <View style={styles.container}>
      <View>
        {/* <Image
          source={{uri: imageUrl}}
          style={styles.image}
          resizeMode="contain"
        /> */}
        <Text style={styles.name}>{track?.title}</Text>
        <Text style={styles.artist}>
          {track?.artist} . {track?.album}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,

    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  name: {
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    color: '#d9d9d9',
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 250, 
    borderRadius: 8, 
    // marginTop: 10,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default SongInfo;
