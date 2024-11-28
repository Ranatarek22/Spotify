import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const userImg = require('../../../assets/images/user.png');

const ProfileDetails = ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => (
  <View style={styles.profileCont}>
    <Image source={userImg} style={styles.profileImage} />
    <Text style={styles.email}>{email}</Text>
    <Text style={styles.username}>{username}</Text>
    <View style={styles.followCont}>
      <View style={styles.followerItem}>
        <Text style={styles.boldText}>778</Text>
        <Text style={styles.grayText}>Followers</Text>
      </View>
      <View style={styles.followerItem}>
        <Text style={styles.boldText}>242</Text>
        <Text style={styles.grayText}>Following</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  profileCont: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  email: {
    color: '#222222',
    paddingVertical: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  followCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    margin: 20,
  },
  followerItem: {
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  grayText: {
    color: '#585858',
  },
});

export default ProfileDetails;
