let router = require('express').Router();
let Utils = require('../services/utils');
let User = require('../models/user');

Utils.getRouteWithUser("/:user", router, (req, res, user, err) => {
    User.findOne({username: req.params.user}, (err, target) => {
        return res.render("user", {user: user, target: target});
    });
});

Utils.postRouteWithUser("/:user/manage/:setting", router, (req, res, user, err) => {
    User.findOne({username: req.params.user}, (err, target) => {
        if (user.username === target.username || user.account_type >= 5) {
            target[req.params.setting] = req.body[req.params.setting];
            target.save((target) => {
                return res.redirect(req.get('referer') + "?updated=account");
            });
        }
    });
});

module.exports = router;
