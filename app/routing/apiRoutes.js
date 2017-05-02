// requiring friendList data
var friends = require('../data/friends.js');
var path = 	require("path");
require('body-parser');

// exporting the function
// what is the purpose of the apps parameter?
module.exports = function(app) {

// using this route to show a body-parser version of this json response
	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});


// allowing users to post their info and compare it to users in the system already
// this runs when the .post runs after the submit button
	app.post("/api/friends", function(req, res) {

// this is the item that is coming from the submit button
// requires body parser to display properly   
    	test = req.body;
    	friends.push(test);
	});

}
