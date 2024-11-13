// service-worker.js

self.addEventListener('notificationclick', event => {
    event.notification.close(); // Cierra la notificación
    event.waitUntil(
        clients.openWindow('https://www.ejemplo.com') // URL a abrir cuando se hace clic en la notificación
    );
});
