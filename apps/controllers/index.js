var express = require("express");

var router = express.Router();

router.use("/admin", require("./admin"));
//router.use("/register", require("./register"));

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

router.get("/register", (req, res) => {
    res.render("register");
});

module.exports = router;