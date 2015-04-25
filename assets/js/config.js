var app = angular.module('clinikapp', ['ngMaterial', 'ui.router', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider) {
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
