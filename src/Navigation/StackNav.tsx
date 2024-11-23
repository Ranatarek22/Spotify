import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome/Welcome';
import Ready from '../screens/Welcome/Ready';
import SignInOut from '../screens/Auth/SignInOut';
import SignIn from '../screens/Auth/SignIn';
import Register from '../screens/Auth/Register';
import Home from '../screens/Home/Home';
import { RootStackParamList } from '../model/RootStackParamList';
import TapNav from './TapNav';


const Stack = createStackNavigator<RootStackParamList>();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ready"
        component={Ready}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signinout"
        component={SignInOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tap"
        component={TapNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
