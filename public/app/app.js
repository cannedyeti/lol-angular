angular.module('LoLApp', ['ui.router', 'LoLCtrl'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'search'
    })
    .state('summoner', {
      url: '/summoner/:name',
      templateUrl: './views/summoner.html',
      controller: 'summoner'
    })
    .state('live', {
      url: '/live/:name',
      templateUrl: './views/live.html',
      controller: 'live'
    })
    // $locationProvider.html5Mode(true);
  }]);