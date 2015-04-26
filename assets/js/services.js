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



angular.module('clinikapp')
       .factory('$localStorage', localStorage)
       ;