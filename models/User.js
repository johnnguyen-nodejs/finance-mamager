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
        total: {type: Number},
        pre_total: Number,
        own: {
            total: Number,
            detail: [
                {
                    title: String,
                    typeOwn: String,
                    total: Number
                }
            ]
        },
        ltss: {
            total: {type: Number},
            detail: [
                {
                    total: Number,
                    month: Date
                }
            ]
        },
        play: {
            total: Number,
            spend: Number,
            detail: [
                {
                    title: String,
                    total: Number,
                    month: Date
                }
            ]
        },
        edu: {
            total: Number,
            spend: Number,
            detail: [
                {
                    title: String,
                    total: Number,
                    month: Date
                }
            ]
        },
        nec: {
            total: Number,
            spend: Number,
            detail: [
                {
                    title: String,
                    total: Number,
                    day: Date,
                    month: Date,
                    year: Date
                }
            ]
        },
        ffa: {
            total: Number,
            profit: Number,
            detail: [
                {
                    title: String,
                    total: Number,
                    month: Date
                }
            ]
        },
    },
    job: {
        type: String,
        default: null
    },
    createdAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: Date.now}
});

module.exports = User = mongoose.model('user', UserSchema);

