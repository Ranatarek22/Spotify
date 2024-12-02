import TrackPlayer, { RepeatMode, Track } from "react-native-track-player";
import { fetchSongs } from "../api/songs";

export const playListData: Track[] = [];
export const populatePlayListData = async (): Promise<void> => {
  try {
    const response = await fetchSongs();
    const data = response.data;

    if (!data || data.length === 0) {
      console.error('No songs received from the API.');
      return;
    }

    playListData.length = 0;

    data.forEach((song) => {
      playListData.push({
        id: song.id.toString(),
        url: song.mp3_url,
        title: song.title,
        artist: song.artist,
        artwork: song.image_url,
        duration: song.duration_seconds,
      });
    });

    // console.log('Playlist successfully populated:', playListData);
  } catch (error) {
    console.error('Error populating playlist data:', error);
  }
};



