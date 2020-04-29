var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");

var app = express();

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Style and script
app.use("/static", express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});