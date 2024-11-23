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
import {BlurView} from '@react-native-community/blur';

const background = require('../../../assets/images/choose_mode_bg.png');
const logo = require('../../../assets/images/logo.png');
const moon = require('../../../assets/images/Moon.png');
const sun = require('../../../assets/images/light.png');

const Ready = () => {
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
          <Text style={styles.header}>Choose Mode</Text>
          <View style={styles.subtitle}>
            <View>
              <View style={styles.circle}>
                <BlurView
                  style={{
                    backgroundColor: '#363135',
                    ...StyleSheet.absoluteFillObject,
                    zIndex: -1,
                  }}
                  // blurType="light"
                  blurAmount={10}
                />
                <Image style={styles.image} source={moon} />
              </View>
              <Text style={styles.dark}>Dark Mode</Text>
            </View>

            <View>
              <View style={styles.circle}>
                <BlurView
                  style={styles.blurBackground}
                  // blurType="light"
                  blurAmount={10}
                />
                <Image style={styles.image} source={sun} />
              </View>
              <Text style={styles.dark}>Light Mode</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Continue"
            onPress={() => {
              navigation.navigate('signinout');
            }}
          />
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
    fontFamily: 'Satoshi-Regular',
  },
  logoContainer: {
    flexBasis: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 20,
  },
  logo: {
    resizeMode: 'contain',
  },
  contentContainer: {
    flexBasis: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '7%',
    fontFamily: 'Satoshi-Bold',
  },
  dark: {
    fontSize: 19,
    // fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Satoshi-Regular',
    //  marginTop:'2%'
  },
  subtitle: {
    flexDirection: 'row',
    gap: 80,
    marginTop: '5%',
  },
  buttonContainer: {
    marginTop: '15%',
    alignItems: 'flex-end',
    paddingTop: '15%',
  },
  buttonPlaceholder: {
    fontSize: 18,
    color: '#00C853',
    fontWeight: 'bold',
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gap: 20,
    backgroundColor: '#30393C',
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  blurBackground: {
    backgroundColor: '#30393C',
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});

export default Ready;
