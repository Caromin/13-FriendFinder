// requiring friendList data
var friends = require('../data/friends.js');

// exporting the function
// what is the purpose of the apps parameter?
console.log("I have received friendsList inside of apiRoutes.");

module.exports = function(app) {

// using this route to show a body-parser version of this json response
	app.get("/api/friends", function(req, res) {
	  res.json(friends);
	});

// allowing users to post their info and compare it to users in the system already
	app.post("api/friends", function(req, res) {
    // Here we take the result of the user"s survey POST and parse it.
    	var newFriend = req.body;
    	var newFriendScores = newFriend.scores;
    	friends.push(newFriend);
	});

}
