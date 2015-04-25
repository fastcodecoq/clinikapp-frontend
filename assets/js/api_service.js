// VIRTUAL API 


function API(){
		
		 this.response = {message:""};


		 this.centers_provider = function(){

		 	var centers = [
		 	{
		    _id : '97162182912a8s7as8a9',		    
		 	name:'clinica del caribe',		 	
		 	description : 'Clinica del caribe, brindamos la mejor atencion en el sector.',
		 	tel : 3017681,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ]
		 	},
		 	{
		    _id : '97162182912aohh123',		 		
		 	name:'clinica santa maria',		 		 
		 	description : 'En la clinica santa maria, contamos con los mejores equipos en radiología a nivel de la costa.',
		 	tel : 3017682,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ]
		 	},
		 	{
		    _id : 'kasja812912a8s7as8a9',		 		
		 	name:'clinica del norte',		 	 
		 	description : 'En la clinica del norte, contamos con los mejores especialistas en pediatría de la costa norte.',
		 	tel : 3017683,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ]
		 	},
		 	{
		    _id : '0812klasias712',		 		
		 	name:'clinica porto azul',		 		 
		 	description : 'En la clinica porto azul, contamos con la mejor sala de urgencias de la costa',
		 	tel : 3017685,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ]
		 	},
		 	{
		 	_id : "lkmklmsad8981271",
		 	name:'clinica madre bernarda',		 			 
		 	description : 'En la clinica madre bernarda, ofrecemos el mejor servicio de UCI en colombia',
		 	tel : 3017687,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ]
		 	}
		 	];

		 	var eps = ['colsanitas', 'coomeva', 'saludcoop','sura','caprecom'];		 	
		 	
		 	var data = [];

		 	if(!this.center_id)
		 	for(i = 0; i < 40; i++)
		 	{

		 			var index = Math.floor((Math.random() * 4) + 0);
		 			centers[index].display = centers[index].name; //middleware fake		 			
		 			data.push(centers[index]);

		 	}
		 	else
		 	 this.response.data = centers[centers.indexOf({_id:this.center_id})];


		 	this.response.data = data;
			
			return this;


		 }

		 this.centers = function(id){		 	

		 	  !id || (this.center_id = id);
		 	  this.entity = 'centers';

		 	  return this;

		 }

		 this.success = function(callback){
		     if(typeof callback === 'function')
		 	    return callback(this.response, 200);
		 }


		 this.get = function(){

		 	  switch(this.entity){
		 	  	  case 'centers':

		 	  	      return this.centers_provider();

		 	  	  break;
		 	  }

		      return this;
		 }

		 return this;

}


angular.module('clinikapp')
       .factory('$api', API)
       ;