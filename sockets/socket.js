const { io } = require('../index');
const Bands = require('../models/bands');
const Band = require('../models/band');

const bands = new Bands();

bands.addBand(new Band('Queen'))
bands.addBand(new Band('Bon Jovi'))
bands.addBand(new Band('Héroes del silencio'))
bands.addBand(new Band('Metallica'))

// Mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    // client.on('mensaje', (message) => {
    //     console.log(message);
    //     io.emit('mensaje', { admin: 'nuevo mensaje' });
    // });

    client.on('emitir-mensaje', (payload) => {
        client.broadcast.emit('nuevo-mensaje', payload);
    });

    client.emit('bandas-activas', bands.getBands());
});