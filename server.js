// required npm installs
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// connect to any open port or to 3000
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + "/app/public"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// (app) is the variable app = express(); that is being passed through to the routes.js
// needs to be below the app.use otherwise it does not work, unsure why atm
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listening and sending a console log confirm if it is working
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});