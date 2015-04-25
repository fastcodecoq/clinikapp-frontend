var app = angular.module('clinikapp', ['ngMaterial', 'ui.router', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider) {
<<<<<<< HEAD
  	$stateProvider.state('elements', {
  		url: "/elements",
      	templateUrl: "views/elements.html"
    });

  	$stateProvider.state('mapa', {
  		url: "/mapa",
      	templateUrl: "views/mapa.html",
      	controller : mapaController
    });

 	 $urlRouterProvider.otherwise("/elements");
}, ['uiGmapGoogleMapApi', function(GoogleMapApiProviders){
        GoogleMapApiProvider.configure({

        });
}]);
=======


  $stateProvider
    .state('elements', {
      url: "/elements",
      templateUrl: "views/elements.html",
      controller : mainCtrl
    })    
    ;

  $urlRouterProvider.otherwise("/elements");


});
>>>>>>> ceac24fcdf41a29de3be745ab665cf23458bd372
