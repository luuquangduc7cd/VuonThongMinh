var express = require("express");

var router = express.Router();


router.get("/", (req, res) => {
    let localData = {pageTitle: "Dashboard"}
    res.render("pages/index", {layout: 'admin', localData});
});
router.get("/icons", (req, res) => {
    let localData = {pageTitle: "Icons"}
    res.render("pages/icons", {layout: 'admin', localData});
});
router.get("/notifications", (req, res) => {
    let localData = {pageTitle: "Thông báo"}
    res.render("pages/notifications", {layout: 'admin', localData});
});
router.get("/asset", (req, res) => {
    let localData = {pageTitle: "Tài sản"}
    res.render("pages/asset", {layout: 'admin', localData});
});
router.get("/typography", (req, res) => {
    let localData = {pageTitle: "Dashboard"}
    res.render("pages/typography", {layout: 'admin', localData});
});
router.get("/user", (req, res) => {
    let localData = {
        pageTitle: "Thông tin cá nhân",
        username: "Test User"
    }
    res.render("pages/user", {layout: 'admin', localData});
});

module.exports = router;