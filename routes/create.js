let router = require('express').Router();
let Utils = require('../services/utils');
let User = require('../models/user');

Utils.getRouteWithUser("/", router, (req, res, user, err) => {
    return res.render("create", {user: user});
});

module.exports = router;
