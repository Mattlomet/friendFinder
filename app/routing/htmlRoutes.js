var express = require('express');
var router = express.Router();
var path = require("path");

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;