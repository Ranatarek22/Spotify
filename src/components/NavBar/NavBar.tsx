import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const logo = require('../../../assets/images/logo.png');

const Navbar: React.FC = () => {
  const handleSearchPress = (event: GestureResponderEvent): void => {
    console.log('Search button pressed!');
  };

  const handleMoreOptionsPress = (event: GestureResponderEvent): void => {
    console.log('More options button pressed!');
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconButton} onPress={handleSearchPress}>
        <Icon name="search" size={35} color="#545454" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={handleMoreOptionsPress}>
        <Icon name="more-vert" size={25} color="#545454" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 0,
    height: 60,
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 108,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
  },
});

export default Navbar;
