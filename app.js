const express = require('express')
require ('dotenv').config();

const app = express()
const port = process.env.PORT;

//NOTE - Handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Renderizar vistas sencillas
app.set('view engine','hbs');

//NOTE - Servir contenido estático - Middleware de express
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Joshy',
        titulo:'I love u Yoshito'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Joshy',
        titulo:'I love u Yoshito'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Joshy',
        titulo:'I love u Yoshito'
    });
});

//NOTE - Ahora se deben especificar las rutas
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
});

//NOTE - En cualquier otra ruta que no esté especificada se envía un msj
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port,()=>{
    console.log('Escuchando por el puerto: ',port)
})

// app.get('/generic', (req, res) => {
//     //Enviar un archivo que se encuentra en la ruta (..)
//     //Contruir path con __dirname para llamar donde corre la app
//     res.sendFile(__dirname + '/public/generic.html');
// });