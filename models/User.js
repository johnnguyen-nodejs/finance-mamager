const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    username: String,
    assets: {
        type: Number,
        default: null
    },
    job: {
        type: String,
        default: null
    },
    createdAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: Date.now}
});

module.exports = User = mongoose.model('user', UserSchema);

