var express = require('express');
var apiRouter = express.Router();
var path = require("path");
var bodyParser = require("body-parser");


var friendsArrayObject = require('../data/friends.js')

var friendsArray = friendsArrayObject.friends;

apiRouter.use(bodyParser.urlencoded({
    extended: true
}))
apiRouter.use(bodyParser.json());

apiRouter.get('/api/friends', (req, res) => {
    return res.json(friendsArray);
});

apiRouter.post('/api/friends', (req, res) => {

    var friendObject = req.body;
    var userSum = 0;
    for (var i = 0; i < friendObject.scores.length; i++) {
        userSum += parseInt(friendObject.scores[i]);
    }

    // friendsArray.push(friendObject);


    for (var i = 0; i < friendsArray.length; i++) {
        var currentFriend = friendsArray[i]
        innnerForLoop(currentFriend,userSum,res);

    }
    

});

module.exports = apiRouter;

function innnerForLoop(currentFriend,userSum,res) {
    var currentSum = 0;
    var savedFriendMatch = '';
    var difference = 0;

    for (var i = 0; i < currentFriend.scores.length; i++) {
        currentSum += parseInt(currentFriend.scores[i]);

        difference = userSum - currentSum;
        console.log(difference);
        console.log(Math.abs(difference))

        if (difference < 5) {
            savedFriendMatch = currentFriend;
        }
    }
    console.log(savedFriendMatch);
   
   return res.send(savedFriendMatch);
    

}