function localStorage(){

		
	this.get = function(key){
		  
		  if(window.localStorage[key])
		  return window.localStorage[key].match('[{|}]') ? JSON.parse(window.localStorage[key]) : window.localStorage[key];
		  else 
		  return undefined;
	}

	this.save = function(key, value){
        window.localStorage[key] = typeof value  === 'object' ? JSON.stringify(value) : value;
	}

	this.update = function(key, value){
        window.localStorage[key] = typeof value  === 'object' ? JSON.stringify(value) : value;
	}

	this.delete = function(key){
		 delete window.localStorage[key];
	}

	return this;
}



function map(){

	var map;

	this.load  = function(options){

		var options = options || {};		
		
			
			function initialize() {

			  
			  var options = {
			    zoom: 8,
			    center: new google.maps.LatLng(-34.397, 150.644),
			    panControl : false
			  };


			  //hay que extender el objeto options aqui

			  map = new google.maps.Map(document.getElementById(options.mapcontainerid || 'map'),
			      options);
			}

			initialize();


	}


	this.addmarker = function(coordinates){

		//coordinates is a object  { lat: int , lng : int }



	}

	return this;

}



angular.module('clinikapp')
       .factory('$localStorage', localStorage)
       .factory('$gmap', map)
       ;