angular.module('LoLCtrl', [])
.controller('first', ['$scope', '$http', '$location', function($scope, $http, $location){
  $scope.greeting = 'Yo dudes'
  $scope.res
  $http.get("/summoner/:name").success(function( data ) {
    $scope.res = data.league; //from your sample;
    console.log( "Load was performed. " + data.league );
  });
}])
