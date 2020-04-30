const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const expressLayouts = require('express-ejs-layouts');

var app = express();

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: true}));

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout', 'layout');

// Style and script
app.use("/static", express.static(__dirname + "/public"));

const controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});