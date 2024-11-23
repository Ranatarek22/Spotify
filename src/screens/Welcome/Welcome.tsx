import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../model/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

const background = require('../../../assets/images/intro_bg.png');
const logo = require('../../../assets/images/logo.png');

const Welcome = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'welcome'>>();
  return (
    <ImageBackground source={background} style={styles.mainBackGround}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.header}>Enjoy Listening To Music</Text>
          <Text style={styles.subtitle}>
            Discover new songs, playlists, and enjoy your favorite music
            wherever you are.
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Get started"
              onPress={() => {
                navigation.navigate('ready');
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainBackGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexBasis: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    resizeMode: 'contain',
  },
  contentContainer: {
    flexBasis: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Satoshi-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#797979',
    textAlign: 'center',
    fontFamily: 'Satoshi-light',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    padding: '10%',
    height: '40%',
    // justifyContent: 'flex-end',
  },
  buttonPlaceholder: {
    fontSize: 18,
    color: '#00C853',
    fontWeight: 'bold',
  },
});

export default Welcome;
