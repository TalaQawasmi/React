const UserController = require('../controllers/user.controllers');
module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/persons', UserController.createUser);
    app.get('/api/people', UserController.getAllPeople);
    app.get('/api/people/:id', UserController.getUser);
}