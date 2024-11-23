import {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {buildDeepLinkFromNotificationData} from '../utils/navigationUtils';

const useNotifications = () => {
  useEffect(() => {
    const requestUserPermission = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted!');
        const token = await messaging().getToken();
        console.log('FCM token:', token);
      }
    };

    const subscribeToTopic = async () => {
      await messaging().subscribeToTopic('albums');
      console.log('Subscribed to albums topic');
    };

    const setupNotificationHandlers = () => {
      messaging().onNotificationOpenedApp(remoteMessage => {
        const url = buildDeepLinkFromNotificationData(remoteMessage.data);
        if (url) {
          console.log('Navigate to:', url);
        }
      });

      messaging().onMessage(async remoteMessage => {
        console.log('Foreground notification:', remoteMessage);
      });

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Background notification:', remoteMessage);
      });
    };

    requestUserPermission();
    subscribeToTopic();
    setupNotificationHandlers();
  }, []);
};

export default useNotifications;
