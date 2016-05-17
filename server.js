var express = require("express");
var app = express();

app.use(express.static("client"));

var port = 3030;

app.listen(port);
console.log("Listening on: ", port);