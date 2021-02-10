const { User } = require('../models/user.models');
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}  
module.exports.getAllPeople = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}
module.exports.createUser = (request, response) => {
    const { title, price, description } = request.body;
    User.create({
        title,
        price,
        description
    })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}