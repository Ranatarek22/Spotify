import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Discover from '../screens/Discover/Discover';
import Favorite from '../screens/Favorite/Favorite';


const homeIcon = require('../../assets/images/Home.png');
const profileIcon = require('../../assets/images/Profile.png');
const discoverIcon=require("../../assets/images/dis.png")
const favIcon = require('../../assets/images/heart.png');



const Tab = createBottomTabNavigator();

const TapNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Profile') {
            iconSource = profileIcon;
          } else if (route.name === 'Discover') {
            iconSource = discoverIcon;
          } else if (route.name === 'Favorite') {
            iconSource = favIcon;
          }

          return (
            <Image
              source={iconSource}
              style={[styles.icon, {tintColor: focused ? '#42C83C' : 'gray'}]}
            />
          );
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#42C83C',
        tabBarInactiveTintColor: 'gray',
        // tabBarLabelStyle: styles.tabBarLabel,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  tabBar: {
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default TapNav;
