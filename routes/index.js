const config = require("../config.json");
let express = require('express');
let router = express.Router();

router.use("/", require("./home"));
router.use("/login", require("./login"));
router.use("/stream", require("./stream"));
router.use("/admin", require("./admin"));
router.use("/create", require("./create"));
router.use("/user", require("./user"));
router.use("/u", require("./user"));
router.use("/settings", require("./settings"));

router.get("/logout", (req, res) => {
    req.session.userId = null;
    return res.redirect("/");
});

module.exports = router;
