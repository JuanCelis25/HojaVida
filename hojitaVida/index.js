const express = require('express');

const server = express();
const port = 3002;

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.set('views', __dirname + '/views');



server.listen(port, ()=>{
    console.log(`servidor iniciado en puerto ${port}`)
})

//Rutas web
server.use('/rost', require('./router/Rutas'));



/*error */
server.use((req , res, next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})
