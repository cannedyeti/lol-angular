angular.module('LoLApp', ['ui.router', 'LoLCtrl'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'first'
    })
  }]);