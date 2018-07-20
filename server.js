var bodyParser = require("body-parser");
var path = require("path");
var express = require('express');
var app = express();
var htmlRouter = require('./app/routing/htmlRoutes.js');
var apiRouterFile = require('./app/routing/apiRoutes.js')



var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/',htmlRouter);
app.use('/', apiRouterFile);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(PORT + ' : opened!');
})
