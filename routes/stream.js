let router = require('express').Router();
let Utils = require('../services/utils');
let User = require('../models/user');
let Stream = require('../models/stream');
let Like = require('../models/like');

Utils.getRouteWithUser("/:stream/like", router, (req, res, user, err) => {
    Stream.findOne({watch_key: req.params.stream}, (err, stream) => {
        Like.create({stream: stream._id, liker: user._id}, (err, like) => {
            stream.likes.push(like._id);
            stream.save((err, stream) => {
                return res.redirect("/stream/" + stream.watch_key);
            });
        });
    });
});

Utils.getRouteWithUser("/random/next", router, (req, res, user, err) => {
    Stream.find({}, (err, streams) => {
        res.redirect("/stream/" + streams[(Math.floor(Math.random() * (streams.length)))].watch_key);
    });
});
Utils.getRouteWithUser("/:stream", router, (req, res, user, err) => {

    Stream.findOneAndUpdate({watch_key: req.params.stream}, {$inc: {views: 1}}, (err, stream) => {
        res.render("stream", {user: user, stream: stream});
    }).populate('owner', 'username');
});

module.exports = router;
