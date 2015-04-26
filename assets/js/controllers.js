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

function mainCtrl($scope, $mdDialog, $mdSidenav, $api, $mdMedia, $rootScope){

			 if(window.history.length > 0)
			 	 $scope.back = true;
	  		 
	  		 
		      	$scope.menu_right = function(){
		        	$mdSidenav("right").toggle();
		      	}

			  	$rootScope.requetsAmbulance = function(ev) {

			  		if(this.value)
			  			 $rootScope.center = this.value;

			  	var content = (!$rootScope.center) ? 
			    	'Desea solicitar una ambulancia al centro de salud mas cercano?' :
			    	'Desea solicitar una ambulancia a ' + $rootScope.center.name + ' mas cercano(a)? '  

			   
			    $mdDialog.show(
			      $mdDialog.confirm()
			        .title('Solicitar Ambulancia')
			        .content(content)
			        .ariaLabel('Solicitar')
			        .ok('Aceptar')	
			        .cancel('Cancelar')		        
			        .targetEvent(ev)
			    )
			    .then(function(){			    	

			    	var content = (!$rootScope.center) ? 
			    	'Se ha solicitado una ambulancia a su ubicación. Por favor mantenga su dispositivo móvil cerca mientras llega la ayuda médica.' :
			    	'Se ha solicitado a ' + $rootScope.center.name + ' una ambulancia a su ubicación. Por favor mantenga su dispositivo móvil cerca mientras llega la ayuda médica.' 

			    	$mdDialog.show(
			    		$mdDialog.alert()
			    		.title('Ambulancia Solicitada.')
			    		.content(content)
			    		.ariaLabel('solicitada')
			    		.ok('Ok')
			    		)
			    	.then(function(){
			    		  delete $rootScope.center;
			    	})

			    }, function(){
			        //

			    		  delete $rootScope.center;
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
   
    $rootScope.center = this.value;	
    $mdBottomSheet.show({
      templateUrl: 'views/bottom_sheet/center.html'
    })
    .then(function(){    	
    	 delete $rootScope.center;
    }, function(){
    	delete $rootScope.center;	
    })
    ;

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



