let router = require('express').Router();
let Utils = require('../services/utils');
let User = require('../models/user');
let Stream = require('../models/stream');

Utils.getRouteWithUser("/", router, (req, res, user, err) => {
    Stream.find({}, (err, streams) => {
        return res.render("admin", {user: user, streams: streams});
    }).populate('owner', 'username');
});

module.exports = router;
