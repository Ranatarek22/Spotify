import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import ProfileHeader from '../../components/ProfileComp/ProfileHeader';
import ProfileDetails from '../../components/ProfileComp/ProfileDetails';
import SongList from '../../components/SongsComp/SongList';
import {ActivityIndicator} from 'react-native';
import { useSongs } from '../../context/SongsContext';

const Profile = () => {
  const {user} = useAuth();
  const {songs}=useSongs();
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user?.user_metadata.username || 'Default Username');
    }
  }, [user]);


  
  return (
    <View style={styles.mainContainer}>
      <ProfileHeader />
      <ProfileDetails email={user?.email || ''} username={username || ''} />
      <SongList songs={songs} loading={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
});

export default Profile;
