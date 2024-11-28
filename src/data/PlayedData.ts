import TrackPlayer, { RepeatMode, Track } from "react-native-track-player";
import { fetchSongs } from "../api/songs";

export const playListData: Track[] = [];

export const populatePlayListData = async (): Promise<void> => {
  try {
    // Simulate API response
    const response = await fetchSongs(); // Replace with your API call
    const data = response.data; // Adjust according to your fetchSongs function

    if (!data || data.length === 0) {
      console.error('No songs received from the API.');
      return;
    }

    playListData.length = 0; // Clear existing playlist data

    data.forEach((song) => {
      playListData.push({
        id: song.id.toString(),
        url: song.mp3_url,
        title: song.title,
        artist: song.artist,
        artwork: song.image_url, // Image URL for track artwork
        duration: song.duration_seconds,
      });
    });

    console.log('Playlist successfully populated:', playListData);
  } catch (error) {
    console.error('Error populating playlist data:', error);
  }
};


