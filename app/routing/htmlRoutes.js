var path = require("path");

// basic routes that sends the user first to each publix link based on the .get request path
module.exports = function(app) { 

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});


app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

};
