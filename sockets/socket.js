const { io } = require('../index');

// Mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('mensaje', (message) => {
        console.log(message);
        io.emit('mensaje', { admin: 'nuevo mensaje' });
    });

    client.on('emitir-mensaje', (payload) => {
        io.emit('nuevo-mensaje', `HEYYYY!!! ${payload}`);
    });
});