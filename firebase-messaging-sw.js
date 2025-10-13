importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

console.log('🔥 Service Worker wird geladen...');

firebase.initializeApp({
  apiKey: "AIzaSyC6knKj_yShtGUhwYKQV0ZyFJuAr_ab974",
  authDomain: "saegewerk-f9ecb.firebaseapp.com",
  projectId: "saegewerk-f9ecb",
  storageBucket: "saegewerk-f9ecb.appspot.com",
  messagingSenderId: "519080850892",
  appId: "1:519080850892:web:aa6aa4e74d4d90038c1969",
  measurementId: "G-DHJT9JJ10C"
});

console.log('✅ Firebase initialisiert');

const messaging = firebase.messaging();

console.log('✅ Messaging bereit');

// Test: Push Event Listener
self.addEventListener('push', (event) => {
  console.log('🔔 PUSH EVENT EMPFANGEN!', event);
  if (event.data) {
    console.log('📦 Push data:', event.data.text());
  }
});

messaging.onBackgroundMessage((payload) => {
  console.log('📨 Background Message empfangen:', payload);

  const notificationTitle = payload.notification?.title || 'Neue Nachricht';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    data: payload.data
  };

  console.log('🔔 Zeige Notification:', notificationTitle);

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

console.log('✅ Service Worker komplett geladen!');