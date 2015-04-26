function localStorage(){

		
	this.get = function(key){
		  return typeof value  === 'object' ? JSON.parse(window.localStorage[key]) : window.localStorage[key];
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



angular.module('clinikapp')
       .factory('$localStorage', localStorage)
       ;