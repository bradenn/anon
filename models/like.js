const config = require("../config.json");
let crypto = require('crypto');
let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');

// Define schema for `Like` database collection
let LikeSchema = new mongoose.Schema({
    stream: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stream'
    },
    liker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

let Like = mongoose.model('Like', LikeSchema);

module.exports = Like;
