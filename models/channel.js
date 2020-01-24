const config = require("../config.json");
let crypto = require('crypto');
let mongoose = require('mongoose');
let autopopulate = require('mongoose-autopopulate');

// Define schema for `Channel` database collection
let ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    rating: {
        type: Number,
        enum: [0, 1, 2, 3],
        default: 1
    },
    displayname: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    picture: String,
    date: String
});

// Load plugin to automatically populate nested queries
ChannelSchema.plugin(autopopulate);

let Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
