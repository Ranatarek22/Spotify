import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks/useAuth';
import StackNav from './StackNav';
import TapNav from './TapNav';
import {ActivityIndicator} from 'react-native';

const AppNav = () => {
  const {isLoggedIn} = useAuth();

  if (isLoggedIn === undefined) {

    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer
      linking={{
        prefixes: ['myapp://'],
        config: {
          screens: {
            welcome: 'welcome',
            ready: 'ready',
            signin: 'signin',
            register: 'register',
            home: 'home',
            tap: 'tap',
          },
        },
      }}>
      {isLoggedIn ? <TapNav /> : <StackNav />}
    </NavigationContainer>
  );
};

export default AppNav;
