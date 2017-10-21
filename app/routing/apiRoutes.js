// requiring friendList data
var friends = require('../data/friends.js');


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
    	var newUserData = req.body;
    	//once the ajax call is made the newly created data is pushed into the friends array dummy data set
    	friends.push(newUserData);

    	//now that the friends list is updated, I want to loop through and find the best match
    	//empty variable after finding the best match
    	var bestMatch = {
    		name: '',
    		photo: '',
    		totalscore: 0,
    	};
 	   //this is the starting point, begins high and will be replaced;
 		var minimumDifference = 1000;
 		//this is temperary answer, saying at index 0, is the best match
 		var answer = 1;

    	var eachDifferenceScoreArray = [];

    	//this for loop seperates newData and compares it to the next point in the array
    	//also resets the emptyDiffernt to 0 before starting the second loop
    	for (i = 0; i < friends.length -1; i++) {
    		var nextGuyOnList = friends[i].score;
    		var newGuy = friends[friends.length -1].score;
    		//both console.logs are working as intended
    		// console.log('should be friend ' + i + ': '+ friends[i].score );
    		// console.log('this should be the last of the arra: ' + friends[friends.length -1].score);
    		var emptyDifference = 0
    		//this loops through the 10 point score and adds up all of the total diffence between them
    		//then pushes the totalscore to the eachDifferenceScoreArray
    		for ( x = 0; x < nextGuyOnList.length; x ++) {
    			//working
    			// console.log(nextGuyOnList.length);
    			var differencesFor = Math.abs(nextGuyOnList[x] - newGuy[x]);
    			// console.log('new difference array: ' + differencesFor);
    			emptyDifference += parseInt(differencesFor);
    			// console.log(differencesFor);
    		}
    		console.log(eachDifferenceScoreArray);
    		eachDifferenceScoreArray.push(emptyDifference);
    		console.log(eachDifferenceScoreArray);
    	};

    	//this is for finding the score that is closes to zero
    	for (i = 0; i < eachDifferenceScoreArray.length; i++) {
    		if (emptyDifference[i] < minimumDifference) {
    			minimumDifference = emptyDifference[i];
    			console.log('inside the loop: ' + minimumDifference);
    			answer = i;
    			console.log('this inside forloop answer');
    		}
    	};
    	// console.log('the final answer is: ' + answer);
	});

}