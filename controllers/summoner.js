var express = require('express');
var router = express.Router();


router.get("/summoner/:name", function(req, res) {
  var name = req.params.name;
  var data = {};
  var summonerInfo;
  var summonerId;
  var accountId;
  var champMastery;
  var recentMatches;
  rp("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + "?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c", function(error, res, body){
    // console.log('im the body', body);
    summonerInfo = JSON.parse(body);
  }).then(function(){
    summonerId = summonerInfo.id;
    accountId = summonerInfo.accountId;
    rp("https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/" + summonerId + '?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c', function(error, res, body){ 
      champMastery = JSON.parse(body)
    }).then(function(){
      rp("https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountId + '/recent?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c', function(error, res, body){
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