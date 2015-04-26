// controllers 
var app = angular.module('clinikapp');

function mapaController($scope,  $mdBottomSheet, $api){
	$scope.map = { center: { latitude: 4.6093879, longitude: -74 }, zoom: 8 };
	
	$api.eps().get().success(function(rs){
   		$scope.entities = rs.data || [];
    })

	$scope.openBottomSheet = function() {
	    $mdBottomSheet.show({
	    	templateUrl: 'views/bottom_sheet/mapa.html'
	    });
	}
}

function mainCtrl($scope, $mdDialog, $mdSidenav, $api, $mdMedia){

			 if(window.history.length > 0)
			 	 $scope.back = true;
	  		 
	  		 $scope.todos = [];

	  		 for(i = 0; i < 6; i++)
	  		 	$scope.todos.push({
				    face: 'assets/img/logo.png',
				    what: 'Brunch this weekend?',
				    who: 'Min Li Chan',
				    notes: "I'll be in your neighborhood doing errands."
	  			});

		      	$scope.menu_right = function(){
		        	$mdSidenav("right").toggle();
		      	}

			  	$scope.showAlert = function(ev) {
			   
			    $mdDialog.show(
			      $mdDialog.confirm()
			        .title('Solicitar Ambulancia')
			        .content('Desea solicitar una ambulancia al centro de salud mas cercano?')
			        .ariaLabel('Solicitar')
			        .ok('Aceptar')	
			        .cancel('Cancelar')		        
			        .targetEvent(ev)
			    )
			    .then(function(){
			    	$mdDialog.show(
			    		$mdDialog.alert()
			    		.title('Ambulancia Solicitada.')
			    		.content('Se ha solicitado una ambulancia a su ubicación. Por favor mantenga su dispositivo móvil cerca mientras llega la ayuda médica.')
			    		.ariaLabel('solicitada')
			    		.ok('Ok')
			    		)
			    }, function(){
			        //
			    })
			    ;

	       		};

     $scope.showAlertLeft = function(ev) {
	    $mdDialog.show(
	      $mdDialog.alert()
	        .title('Swipe')
	        .content('Haz hecho swipe left.')
	        .ariaLabel('Swipe')
	        .ok('Aceptar')
	        .targetEvent(ev)
	    );
    };


    



}



	

function entityCtrlBase($scope, $rootScope, $stateParams){

   $scope.load = function(id){

   	  var id = id || $scope.id;

   }

   $scope.create = function(data){

   	  var data = data || $scope;

   }

   $scope.update = function(id){

   	  var id = id || $scope.id;


   }

   $scope.delete = function(id){

   	  var id = id || $scope.id;


   }
}






function centersCtrl($scope, $rootScope, $mdBottomSheet, $stateParams, $api) {
  


  $scope.centerBottomSheet = function() {  


    $rootScope.center = this.value.name;	
    $mdBottomSheet.show({
      templateUrl: 'views/bottom_sheet/center.html'
    });
  };


   $scope.load = function(){

   	      $api
		   .centers()
		   .get()
		   .success(function(rs){
		   	   console.log(rs);
		   	   $scope.values = rs.data;
		   })

   }

}

app
.controller('mainCtrl', mainCtrl)
.controller('entityCtrlBase', entityCtrlBase)
;



