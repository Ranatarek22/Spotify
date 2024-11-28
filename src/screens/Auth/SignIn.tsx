import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackArrow from '../../components/Arrows/BackArrow';
import CustomButton from '../../components/Buttons/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../model/RootStackParamList';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {useAuth} from '../../hooks/useAuth';
import { SignInSchema } from './Validation/SignInValid';

const logo = require('../../../assets/images/logo.png');
const hide = require('../../../assets/images/Hide.png');
const google = require('../../../assets/images/google.png');
const apple = require('../../../assets/images/apple.png');



const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {signIn, isLoggedIn} = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.nav}>
        <BackArrow />
        <Image source={logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subTitle}>
          If You Need Any Support <Text style={styles.link}>Click Here</Text>
        </Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={async values => {
          const user = await signIn(values.email, values.password);
          if(isLoggedIn){
            navigation.navigate('tap');
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Username Or Email"
              style={[
                styles.input,
                touched.email && errors.email ? styles.errorInput : null,
              ]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={[
                  styles.input,
                  touched.password && errors.password
                    ? styles.errorInput
                    : null,
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Image source={hide} style={styles.eyeIcon} />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Text style={styles.recoveryText}>Recovery Password</Text>

            <CustomButton title="Sign In" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={styles.loginWith}>
        <LinearGradient
          colors={['#D3D3D3', '#B0B0B0']}
          style={styles.line}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        <Text style={styles.divider}>Or</Text>
        <LinearGradient
          colors={['#D3D3D3', '#B0B0B0']}
          style={styles.line}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      </View>

      <View style={styles.brands}>
        <Image source={google} style={styles.brand} />
        <Image source={apple} style={styles.brand} />
      </View>
      <View>
        <Text style={styles.subTitle}>
          Not A Member ? <Text style={styles.link}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    padding: 20,
  },
  logo: {
    width: 108,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 90,
  },
  title: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15%',
    color: '#383838',
  },
  subTitle: {
    color: '#383838',
    fontFamily: 'Satoshi-Regular',
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
  },
  link: {
    color: '#38B432',
  },
  nav: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 15,
  },
  divider: {
    marginHorizontal: 10,
  },
  input: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
  },
  recoveryText: {
    alignSelf: 'flex-start',
    color: '#383838',
    fontSize: 14,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  loginWith: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '8%',
  },
  line: {
    borderBottomColor: '#b6bcd4',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '40%',
    height: 2,
  },
  brands: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  brand: {
    marginHorizontal: -50,
  },
});

export default SignIn;
