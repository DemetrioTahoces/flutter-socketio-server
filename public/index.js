var socket = io();

socket.on('connect', function() {
    console.log('Conectado al sevidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el sevidor');
});

// socket.on('mensaje', function(message) {
//     console.log(message);
// });

socket.on('nuevo-mensaje', function(message) {
    console.log(message);
});

socket.on('bandas-activas', function(message) {
    console.clear();
    console.table(message);
});

// socket.emit('mensaje', { nombre: 'Demetrio' });