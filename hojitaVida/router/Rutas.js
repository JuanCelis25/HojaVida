const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    //res.send('Bienvenido querido cliente');
    res.render('index',{titulo:"Juan David Celis Venegas"} );  
});

router.get('/about',(req, res)=>{
    //res.send('Bienvenido querido cliente');
    res.render('aboutme' );  
});

router.get('/skills',(req, res)=>{
    //res.send('Bienvenido querido cliente');
    res.render('habilidades' );  
});

router.get('/conctac',(req, res)=>{
    //res.send('Bienvenido querido cliente');
    res.render('contactos' );  
});

module.exports = router;