import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const discover = require('../../../assets/images/discover_weekly.jpeg'); 
const releaseRadar = require('../../../assets/images/release_radar.jpeg'); 

const DiscoverRelease: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* First Card */}
      <View style={styles.card}>
        <Image source={discover} style={styles.image} />
        <Text style={styles.text}>Discover Weekly</Text>
      </View>

      {/* Second Card */}
      <View style={styles.card}>
        <Image source={releaseRadar} style={styles.image} />
        <Text style={styles.text}>Release Radar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
    marginTop: 20,
  },
  card: {

    borderRadius: 10, 
    width: '48%', 
    marginBottom: 10, 
    alignItems: 'center',
    padding: 10, 
  },
  image: {
    width: '100%', 
    height: 150, 
    borderRadius: 10, 
    resizeMode: 'cover', 
  },
  text: {
    marginTop: 10, 
    fontSize: 14, 
    color: '#121212',
    textAlign: 'center',
    fontFamily:'Satoshi-Bold' 
  },
});

export default DiscoverRelease;
