import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackArrow from '../Arrows/BackArrow';

const ProfileHeader = () => (
  <View style={styles.nav}>
    <BackArrow />
    <Text style={styles.title}>Profile</Text>
    <TouchableOpacity style={styles.iconButton}>
      <Icon name="more-vert" size={25} color="#545454" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
  },
});

export default ProfileHeader;
