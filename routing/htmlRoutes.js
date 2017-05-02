var express = require('express');
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = (function() { 

 var app = express.Router();

	app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});


app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/api/friendsList", function(req, res) {
  return res.json(friendsList);
});

});
