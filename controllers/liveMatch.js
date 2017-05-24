var express = require('express');
var router = express.Router();


router.get("/live/:name", function(req, res) {
  console.log("hi")
  var name = req.params.name;
  var data = {};
  var summonerInfo;
  var summonerId;
  var matchData;
  rp("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + "?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c", function(error, res, body){
    // console.log('im the live body', body);
    summonerInfo = JSON.parse(body);
  }).then(function(){
    summonerId = summonerInfo.id
    rp("https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/" + summonerId + "?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c", function(error, res, body){
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