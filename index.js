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

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.get("/summoner/:name", function(req, res) {
  var league;
  var name = req.params.name;
  var data = {};
  rp("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c", function(error, res, body){
    league = body;
  }).then(function(){
    data = {
      'name': name,
      'info': JSON.parse(league)
    };
    res.send(data)
  })
})


server.listen(process.env.PORT || 3000, function() {
  console.log("hey server");
});
// server = app.listen(process.env.PORT || 3000);

module.exports = app;