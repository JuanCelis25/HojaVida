const express = require('express');
const router = express.Router();

router.get('/mmg',(req, res)=>{
    //res.send('Bienvenido querido cliente');
    res.render('index',{inicio:"Inicio", sobre:"Sobre mí" , habili:"Habilidades" , contacto:"Contactos" , titulo:"Juan David Celis Venegas"} );
    
});

module.exports = router;