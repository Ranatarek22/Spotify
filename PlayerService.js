
import {populatePlayListData, playListData} from './src/data/PlayedData';
import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

export async function setupPlayer() {
  try {
 
    await TrackPlayer.getCurrentTrack();
    console.log('Player is already set up.');
    return true;
  } catch (error) {
   
    await TrackPlayer.setupPlayer();
    console.log('Player setup completed.');
    return true;
  }
}

export const setupRepeatMode = async () => {
  await TrackPlayer.setRepeatMode(RepeatMode.Queue); // Set repeat mode to Queue
  console.log('Repeat mode set to Queue');
};
export const fetchSongs = async () => {
  await populatePlayListData(); 
  if (playListData.length > 0) {
    await TrackPlayer.add(playListData); 
    console.log('Songs added to TrackPlayer:', playListData);
  } else {
    console.error('No songs available to add.');
  }
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export async function addTrack() {
  try {
    await fetchSongs();
    console.log('Tracks added successfully.');
  } catch (error) {
    console.error('Error adding tracks:', error);
  }
}
export async function playBackService() {
  const pauseSubscription = TrackPlayer.addEventListener(
    Event.RemotePause,
    () => {
      TrackPlayer.pause();
    },
  );

  const playSubscription = TrackPlayer.addEventListener(
    Event.RemotePlay,
    () => {
      TrackPlayer.play();
    },
  );

  const nextSubscription = TrackPlayer.addEventListener(
    Event.RemoteNext,
    () => {
      TrackPlayer.skipToNext();
    },
  );

  const previousSubscription = TrackPlayer.addEventListener(
    Event.RemotePrevious,
    () => {
      TrackPlayer.skipToPrevious();
    },
  );

  return () => {
    pauseSubscription.remove();
    playSubscription.remove();
    nextSubscription.remove();
    previousSubscription.remove();
  };
}
