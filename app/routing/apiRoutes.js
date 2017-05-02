// requiring friendList data
var friends = require('../data/friends.js');

// exporting the function
// what is the purpose of the apps parameter?
console.log("I have received friendsList inside of apiRoutes.");

module.exports = function(app) {

// get request for displaying the homepage
// res means to get a RESponse, send the file

app.get("/api/friends", function(req, res) {
  res.json(friends);
});

// app.get("/api/friends", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });

}
