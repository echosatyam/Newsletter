const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

var app = express();

var myPort = 3000;
app.use(express.static("public"));
app.listen(myPort, function () {
  console.log("my server is running on port " + myPort)
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});