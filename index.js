require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 3000;
const Url = require('url');
var request = require('request');
var rp = require('request-promise');

var app = express();
var server = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));


app.use('/live', require('./controllers/liveMatch'));
app.use('/summoner', require('./controllers/summoner'));


server.listen(process.env.PORT || 3000, function() {
  console.log("hey server");
});
// server = app.listen(process.env.PORT || 3000);

module.exports = app;