var express = require('express');
var router = express.Router();
var API_KEY = process.env.API_KEY;
var rp = require('request-promise');

router.get("/:name", function(req, res) {
  // console.log("working")
  var name = req.params.name;
  var data = {};
  var summonerInfo;
  var summonerId;
  var accountId;
  var champMastery;
  var recentMatches;
  rp("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + "?api_key=" + API_KEY, function(error, res, body){
    // console.log('im the body', body);
    summonerInfo = JSON.parse(body);
  }).then(function(){
    summonerId = summonerInfo.id;
    accountId = summonerInfo.accountId;
    rp("https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/" + summonerId + '?api_key=' + API_KEY, function(error, res, body){ 
      champMastery = JSON.parse(body)
    }).then(function(){
      rp("https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountId + '/recent?api_key=' + API_KEY, function(error, res, body){
        recentMatches = JSON.parse(body);
      }).then(function(){
        data = {
          'name': name,
          'info': summonerInfo,
          'champ_mastery': champMastery,
          'recent_matches': recentMatches
        };
        res.send(data)
      });
    });
  });
})

module.exports = router;