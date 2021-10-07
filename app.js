/*const http = require('http');
const server = http.createServer((req, res) => {    
    res.end('Estoy respondiendo a tu solicitud')
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log(`escuchando solicitudes en el puerto ${puerto}`)
})*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.get('/', (req, res) => {
    res.send('Mi respuesta desde express')
})

app.get('/servicios', (req, res) => {
    res.send('Esta es la pagina de servicios')
})



app.listen(port, ()=> {
    console.log(`servidor funcionando en el puerto ${port}`)
})