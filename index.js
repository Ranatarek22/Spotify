// /**
//  * @format
//  */
// import TrackPlayer from 'react-native-track-player';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { playBackService } from './musicPlayerServices';

// AppRegistry.registerComponent(appName, () => App);
// TrackPlayer.registerPlaybackService(() => playBackService);
/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {playBackService} from './PlayerService';
// import service from './service';
// Register the main app
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playBackService);
// Register the playback service
// TrackPlayer.registerPlaybackService(() => require('./service').playBackService);
// TrackPlayer.registerPlaybackService(() => service);
