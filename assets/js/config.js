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
    .state('citas', {
      url: "/citas",
      templateUrl: "views/citas.html",
      controller : citasCtrl
    })    
    .state('map', {
  		url: "/map",
      	templateUrl: "views/mapa.html",
      	controller : mapaController
    })
   .state('call', {
      url: "/call",
        templateUrl: "views/call.html",
        controller : centersCtrl
    })
    ;
     
 	 
 	$urlRouterProvider.otherwise("/favorites");

 });

/*
    }, ['uiGmapGoogleMapApi', function(GoogleMapApiProviders){
    
         GoogleMapApiProvider.configure({ });
          }]);

*/


app.run(function($rootScope, $mdSidenav, $mdBottomSheet, $state){

	$rootScope.$on('$viewContentLoaded', 
			function(event, toState, toParams, fromState, fromParams){ 	

        console.log($state);		   	           


				 $rootScope.state = $state.current.name;
			    		   

			    $mdBottomSheet.hide();
  				$mdSidenav("right").close();
			 
			});

 $rootScope.backcounter = 0;

  $rootScope.$on('$stateChangeSuccess', 
              function(event, toState, toParams, fromState, fromParams){ 
                
              $rootScope.back = fromState.name != '' && toState.name != '' ? true : false;                  
              $rootScope.backcounter++;

               console.log($rootScope.back, 'back')

           });



    $rootScope.goback = function(){
      window.history.back();
      $rootScope.backcounter--;
      if($rootScope.backcounter === 0)
         $rootScope.back = false;
    }

	

})

