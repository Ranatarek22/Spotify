import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import MusicPlayer from "../screens/Music/MusicPlayer"
import TapNav from './TapNav';
import { RootStackParamAuthList } from '../model/RootStackParamAuthList';

const Stack = createStackNavigator<RootStackParamAuthList>();

const AuthStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="TapNav">
      <Stack.Screen
        name="TapNav"
        component={TapNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="musicplayer"
        component={MusicPlayer}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNav;
