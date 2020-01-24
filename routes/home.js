let router = require('express').Router();
let Utils = require('../services/utils');
let Stream = require('../models/stream');
let Faker = require('faker');

Utils.getRouteWithUser("/", router, (req, res, user, err) => {
    Stream.find({}, (err, streams) => {
        return res.render("home", {user: user, streams: streams});
    }).populate("owner", ["username", "verified"]).limit(5);
});


// /https://picsum.photos/1280/720
Utils.getRouteWithUser("/stream", router, (req, res, user, err) => {
    for (let i = 0; i < 10; i++) {
        let data = {
            name: Faker.lorem.sentence(),
            owner: "5e0d0ebef5789a109b415e8e",
            desc: Faker.lorem.sentence(),
            thumbnail: "https://picsum.photos/seed/" + (Math.floor(Math.random() * 1000)) + "/1280/720",
            stream_key: "test",
            watch_key: "as",
            date: new Date()
        };
        Stream.create(data, (stream) => {
        });
    }
    return res.redirect("/");
});

module.exports = router;
