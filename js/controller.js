angular.module('LoLCtrl', [])
.controller('first', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.greeting = 'Yo dude'
  $scope.results

  $http({
    method: 'JSONP',
    url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=RGAPI-2e3d4429-ce3a-4f34-8301-3ca68c214c9c',
    params: {
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
        }
    // url: 'http://pokeapi.co/api/v2/pokemon?limit=151'

  }).then(function success(res) {
    $scope.results = res;
    console.log($scope.results)
  }, function error(err) {
    console.log("Error", err)
  });

}])
