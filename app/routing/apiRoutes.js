var express = require('express');
var apiRouter = express.Router();
var path = require("path");

var friendsArrayObject = require('../data/friends.js')

var friendsArray = friendsArrayObject.friends;

apiRouter.get('/api/friends', (req, res) => {
   return res.json(friendsArray);
});

apiRouter.post('/api/friends', (req, res) => {
    res.send(path.join(__dirname, "/public/home.html"));
});

module.exports = apiRouter;