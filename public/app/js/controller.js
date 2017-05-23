angular.module('LoLCtrl', [])
.controller('summoner', ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){
  $scope.greeting = 'Yo dudes'
  $scope.results
  $http.get("/summoner/" + $state.params.name).success(function( data ) {
    console.log(data)
    $scope.results = data; 
    $scope.name = data.name;
    $scope.res = data.info[$scope.name];
    console.log( "Load was performed. " + $scope.res.name );
  });
}])
.controller('search', ['$scope', '$http', '$location', '$state', function($scope, $http, $location, $state){
  $scope.userInput = ''

  $scope.search = function() {
    $location.path("/summoner/" + $scope.userInput);
  }
}])
