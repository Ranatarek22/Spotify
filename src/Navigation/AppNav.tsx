import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../hooks/useAuth';
import StackNav from './StackNav';
import {ActivityIndicator} from 'react-native';
import AuthStackNav from './AuthStackNav';

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
      {isLoggedIn ? <AuthStackNav/> : <StackNav />}
    </NavigationContainer>
  );
};

export default AppNav;
