angular.module('clinikapp').factory('$geoFactory',['$q', function($q){
	function _getPosition(_options){
		var q = $q.defer();
        
        navigator.geolocation.getCurrentPosition(function(result){
        	q.resolve(result);
        }, function(err){
        	q.reject(err);
        }, _options);

        return q.promise;
	}

	function getPosition(options){
		return _getPosition(options); 
	}

	return {
		getPosition : getPosition
	}
}]);