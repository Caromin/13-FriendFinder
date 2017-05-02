// requiring friendList data
var friends = require('../data/friends.js');
var path = require("path");


// exporting the function
// what is the purpose of the apps parameter?
module.exports = function(app) {

// using this route to show a body-parser version of this json response
	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});

// allowing users to post their info and compare it to users in the system already
	app.post("api/friends", function(req, res) {
    // Here we take the result of the user"s survey POST and parse it.
    	var addTo = req.body;
    	friends.push(addTo);
	});

}
