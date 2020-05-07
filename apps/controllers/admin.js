var express = require("express");

var router = express.Router();


router.get("/", (req, res) => {
    let localData = {pageTitle: "Dashboard"}
    res.render("pages/index", {layout: 'admin', localData});
});
router.get("/devices", (req, res) => {
    let localData = {pageTitle: "Quản lý thiết bị"}
    res.render("pages/devices", {layout: 'admin', localData});
});
router.get("/control", (req, res) => {
    let localData = {pageTitle: "Điều khiển thiết bị"}
    res.render("pages/control", {layout: 'admin', localData});
});
router.get("/user", (req, res) => {
    let localData = {
        pageTitle: "Thông tin cá nhân",
        username: "Test User"
    }
    res.render("pages/user", {layout: 'admin', localData});
});

module.exports = router;