const UserController = require('../controllers/user.controllers');
module.exports = function(app){
    app.get('/api', UserController.index);
}
