// main.js

// Registro del Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('Service Worker registrado:', reg))
    .catch(err => console.error('Error al registrar Service Worker:', err));
}

// Solicitar permiso para Notificaciones Push
document.getElementById('notifyBtn').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            enviarNotificacion();
        } else {
            console.log('Permiso denegado para notificaciones.');
        }
    });
});

function enviarNotificacion() {
    navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('¡Hola desde la PWA!', {
            body: 'Esta es una notificación de prueba.',
            icon: 'icon.png', // Asegúrate de incluir un icono en tu proyecto
            vibrate: [200, 100, 200],
            tag: 'test-notification'
        });
    });
}
