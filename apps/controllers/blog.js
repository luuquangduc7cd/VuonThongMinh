var express = require("express");

var router = express.Router();


router.get("/", (req, res) => {
    res.json({"Message": "Blog page"});
});


module.exports = router;