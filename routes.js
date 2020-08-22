const routes = require('express').Router();

const UserController = require('./controllers/UserController');

routes.get('/', (req,res) => {
    res.send('Ok!');
});

routes.get('/users', UserController.index);
routes.get('/users', UserController.store);

module.exports = routes;