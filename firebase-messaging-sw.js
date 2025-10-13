importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC6knKj_yShtGUhwYKQV0ZyFJuAr_ab974",
  authDomain: "saegewerk-f9ecb.firebaseapp.com",
  projectId: "saegewerk-f9ecb",
  storageBucket: "saegewerk-f9ecb.appspot.com",
  messagingSenderId: "519080850892",
  appId: "1:519080850892:web:aa6aa4e74d4d90038c1969",
  measurementId: "G-DHJT9JJ10C"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);

  const notificationTitle = payload.notification?.title || 'Neue Nachricht';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});