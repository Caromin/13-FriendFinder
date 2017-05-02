var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// var reg = require('./app/routing/htmlRoutes');
// var apiRoutes = require('./app/routing/apiRoutes');
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// (app) is the function that was being exported in that file
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// app.use('/htmlRoutes', reg);
// app.use('/', reg);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});