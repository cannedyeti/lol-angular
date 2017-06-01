angular.module('LoLCtrl', ['LoLServices'])
.controller('summoner', ['$scope', '$http', '$location', '$state', 'Champs', function($scope, $http, $location, $state, Champs){
  $scope.greeting = 'Summoner'
  $scope.results
  $scope.champs = Champs.getChamps().data
  $http.get("/summoner/" + $state.params.name).success(function( data ) {
    console.log(data)
    $scope.results = data; 
    $scope.name = data.name;
    $scope.info = data.info;
    $scope.recentMatches = data.recent_matches;
    $scope.champ_mastery = data.champ_mastery;
    console.log( "Load was performed. " + $scope.name );
  });
}])

.controller('live', ['$scope', '$http', '$location', '$state', 'Champs', function($scope, $http, $location, $state, Champs){
  $scope.greeting = 'live'
  $scope.champs = Champs.getChamps().data
  $http.get("/live/" + $state.params.name).success(function( data ) {
    console.log("live", data)
    $scope.results = data; 
    $scope.participants = $scope.results.match_data.participants
    $scope.team1 = $scope.participants.slice(0,5);
    $scope.team2 = $scope.participants.slice(5,10);
    $scope.name = data.name;
    console.log( "Load was performed. " + $scope.name );
  });

}])

.controller('search', ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){
  $scope.userInput = ''
  $scope.searchSummoner = function() {
    $location.path("/summoner/" + $scope.userInput);
  }
  $scope.searchGame = function() {
    $location.path("/live/" + $scope.userInput);
  }
}])
