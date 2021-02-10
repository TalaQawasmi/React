const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: {type: String}
}, { timestamps: true });
module.exports.User = mongoose.model('user', UserSchema);