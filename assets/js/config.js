var app = angular.module('clinikapp', ['ngMaterial', 'ui.router', 'uiGmapgoogle-maps', 'ngMdIcons']);

app.config(function($stateProvider, $urlRouterProvider) {



   $stateProvider
    .state('centers', {
      url: "/centers",
      templateUrl: "views/centers.html",
      controller : centersCtrl
    }) 
    .state('favorites', {
      url: "/favorites",
      templateUrl: "views/favorites.html",
      controller : centersCtrl
    })    
    .state('map', {
  		url: "/map",
      	templateUrl: "views/mapa.html",
      	controller : mapaController
    })
    ;
     
 	 
 	$urlRouterProvider.otherwise("/centers");

 });

/*
    }, ['uiGmapGoogleMapApi', function(GoogleMapApiProviders){
    
         GoogleMapApiProvider.configure({ });
          }]);

*/


app.run(function($rootScope, $mdSidenav, $mdBottomSheet, $state){

	$rootScope.$on('$viewContentLoaded', 
			function(event, toState, toParams, fromState, fromParams){ 			   	           

				$rootScope.state = $state.current.name;
			    		   

			    $mdBottomSheet.hide();
  				$mdSidenav("right").close();
			 
			});



  

	

})

