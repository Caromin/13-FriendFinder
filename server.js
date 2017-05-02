var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var friendsList = require('./app/friends');

var reg = require('./routing/htmlRoutes');
// var apiRoutes = require('./routing/apiRoutes');
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/htmlRoutes', reg);
app.use('/', reg);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});