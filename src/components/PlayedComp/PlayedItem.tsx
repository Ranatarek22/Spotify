import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Played} from '../../model/Played';

type props = {
  data: Played;
};

const PlayedItem: React.FC<props> = ({data}) => {
  return (
    <View style={styles.card}>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.text}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 40, 
    width: 170, 
  },
  image: {
    width: 165, 
    height: 150, 
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#ccc', 
    resizeMode: 'cover', 
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: '#121212',
    textAlign: 'center',
    fontFamily: 'Satoshi-Bold',
  },
});

export default PlayedItem;
