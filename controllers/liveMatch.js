require("dotenv").config();
var express = require('express');
var router = express.Router();
var API_KEY = process.env.API_KEY;
var rp = require('request-promise');

router.get("/:name", function(req, res) {
  // console.log("hi")
  var name = req.params.name;
  var data = {};
  var summonerInfo;
  var summonerId;
  var matchData;
  var err;
  rp("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + "?api_key=" + API_KEY, function(error, res, body){
    // console.log('im the live body', body);
    summonerInfo = JSON.parse(body);
  }).then(function(){
    summonerId = summonerInfo.id
    rp("https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/" + summonerId + "?api_key=" + API_KEY, function(error, res, body){
      matchData = JSON.parse(body);
    }).then(function(){
      data = {
          'name': name,
          'info': summonerInfo,
          'match_data': matchData
        };
        res.send(data)
    });
  });
});

module.exports = router;