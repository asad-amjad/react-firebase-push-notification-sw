importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// console.log(import.meta.env)
const firebaseConfig = {
    apiKey: 'AIzaSyB5Xy0v5ddrCzKSZSkRTOaup-So7wX6xtI',
    authDomain: 'react-push-notification-pro.firebaseapp.com',
    projectId: 'react-push-notification-pro',
    storageBucket: 'react-push-notification-pro.appspot.com',
    messagingSenderId: '489371174816',
    appId: '1:489371174816:web:6fa7681f2890adb79406c5',
    measurementId: 'G-C9SLKTT0YB'
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
