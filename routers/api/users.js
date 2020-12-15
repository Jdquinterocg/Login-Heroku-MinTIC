const router = require('express').Router();
const { User } = require('../../models');
const userController = require('../../controllers/UserController.js');
const { request } = require('express');
var bcrypt = require('bcryptjs');


router.get('/', async(req, res)=>{
    const user = await User.findAll();
    res.status(200).json(user);
});

router.post('/register', async(req,res)=>{
    //Encripta la contraseña. Recibe una cadena sin encriptar y el 10 es cuantas veces va a ejecutar el algoritmo de encriptacion
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
});

router.post('/login', userController.login)

module.exports = router;