import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../model/RootStackParamList';
import BackArrow from '../../components/Arrows/BackArrow';
const logo = require('../../../assets/images/logo.png');
const auth = require('../../../assets/images/auth_bg.png');
const lines = require('../../../assets/images/Union.png');
const leftarrow = require('../../../assets/images/left.png');

const SignInOut = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const backNav = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <BackArrow />
      <Image source={lines} style={styles.upperLines} />
      <View style={styles.topContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Enjoy Listening To Music</Text>
        <Text style={styles.description}>
          Spotify is a proprietary Swedish audio streaming and media services
          provider
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('register')}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('signin')}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={lines} style={styles.linesImage} />
      <Image source={auth} style={styles.bottomImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  spaceView: {
    flex: 2,
  },
  topContainer: {
    flex: 3,
    alignItems: 'center',
    marginTop: '20%',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: '#E9E9E9',
  },

  logo: {
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 40,
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Satoshi-Light',
    color: '#666',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 26,
  },
  registerButton: {
    backgroundColor: '#42C83C',
    paddingVertical: 27,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginRight: 40,
    zIndex: 1,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInButton: {
    paddingVertical: 27,
    paddingHorizontal: 40,
    zIndex: 1,
  },
  signInButtonText: {
    color: '#333',
    fontSize: 16,
  },
  linesImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
  },
  upperLines: {
    position: 'absolute',
    top: -40,
    right: -10,
    resizeMode: 'cover',
    transform: [{rotate: '270deg'}],
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    resizeMode: 'cover',
  },
});

export default SignInOut;
