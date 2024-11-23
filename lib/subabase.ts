import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://kfeezeudbksovfjwgmab.supabase.co'; 
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmZWV6ZXVkYmtzb3ZmandnbWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NzE4MzgsImV4cCI6MjA0NzM0NzgzOH0.oc7mnR6VhPbJSQqWkQA-VhtF8_F8Tzn1DSqqzrvuDD0'; // Replace with your Supabase public anon key


const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
async function sendNotificationToFirebase(album) {
  const response = await fetch('https://your-cloud-function-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'New Album Added!',
      body: `Check out the new album: ${album.name}`,
      fcmToken: 'recipient-device-token', // Retrieve and provide the recipient token
    }),
  });

  if (response.ok) {
    console.log('Notification sent!');
  } else {
    console.error('Failed to send notification:', response.statusText);
  }
}

supabase
  .channel('albums')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'albums' },
    (payload) => {
      console.log('New album added:', payload);
      // Call Firebase Cloud Functions or another backend API to send the push notification
      sendNotificationToFirebase(payload.new);
    }
  )
  .subscribe();


export default supabase;
