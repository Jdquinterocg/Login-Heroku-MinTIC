const router = require('express').Router();
const apiRouterUser = require('./api/users');
// const apiRouterFilm = require('./api/films');


router.use('/user', apiRouterUser); //.com/api/user
// router.use('/film', apiRouterFilm);


module.exports = router;