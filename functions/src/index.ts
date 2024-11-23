// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

// admin.initializeApp();

// export const sendPushNotification = functions.https.onRequest(
//   async (
//     req: functions.https.Request,
//     res: functions.Response
//   ) => {
//     const { title, body, fcmToken } = req.body;

//     if (!title || !body || !fcmToken) {
//       return res.status(400).send("Missing required fields: title, body, or fcmToken.");
//     }

//     const message = {
//       notification: {
//         title,
//         body,
//       },
//       token: fcmToken,
//     };

//     try {
//       await admin.messaging().send(message);
//       return res.status(200).send("Notification sent successfully!");
//     } catch (error) {
//       console.error("Error sending notification:", error);
//       return res.status(500).send("Error sending notification.");
//     }
//   }
// );
