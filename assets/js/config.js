// angular config

var app = angular.module('clinikapp', ['ngMaterial', 'ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('elements', {
      url: "/elements",
      templateUrl: "views/elements.html",
      controller : centersCtrl
    })    
    ;

  $urlRouterProvider.otherwise("/elements");


});
