import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {fetchSongs} from '../../api/songs';
import {useAuth} from '../../hooks/useAuth';
import ProfileHeader from '../../components/ProfileComp/ProfileHeader';
import ProfileDetails from '../../components/ProfileComp/ProfileDetails';
import SongList from '../../components/SongsComp/SongList';
// import {addTrack, setupPlayer} from '../../../musicPlayerServices';
import {ActivityIndicator} from 'react-native';

const Profile = () => {
  const {user} = useAuth();
  const [username, setUsername] = useState<string | null>(null);
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user?.user_metadata.username || 'Default Username');
    }
  }, [user]);
  // async function setup() {
  //   let isSetup = await setupPlayer();
  //   if (isSetup) {
  //     await addTrack();
  //   }
  //   setIsPlayerReady(isSetup);
  // }
  // useEffect(() => {
  //   setup();
  // }, []);
  useEffect(() => {
    const loadSongs = async () => {
      const {data, error} = await fetchSongs();
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      if (error) {
        console.error('Error fetching songs:', error);
      } else {
        setSongs(data || []);
      }
      setLoading(false);
    };

    loadSongs();
  }, []);
  
  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   );
  // }
  return (
    <View style={styles.mainContainer}>
      <ProfileHeader />
      <ProfileDetails email={user?.email || ''} username={username || ''} />
      <SongList songs={songs} loading={loading} />
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
