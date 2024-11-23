const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();
app.use(bodyParser.json());

// Endpoint to handle Supabase webhook
app.post('/new-album', async (req, res) => {
  const {title, artist} = req.body.record;

  if (!title || !artist) {
    return res.status(400).send('Invalid data received');
  }

  // Prepare the notification message
  const message = {
    notification: {
      title: 'New Album Added!',
      body: `Check out "${title}" by ${artist}!`,
    },
    topic: 'albums', // Target a topic or specific tokens
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Notification sent:', response);
    res.status(200).send('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Failed to send notification');
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
