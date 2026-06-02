self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'ルーティーン部屋';
  const options = {
    body: data.body || '新しいメッセージがあります',
    icon: '/routine_app/icon.png',
    badge: '/routine_app/icon.png',
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/routine_app/'));
});
