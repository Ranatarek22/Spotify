import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../../model/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

const leftarrow = require('../../../assets/images/left.png');

const BackArrow = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
      <Image source={leftarrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: '#E9E9E9',
  },
});
export default BackArrow;
