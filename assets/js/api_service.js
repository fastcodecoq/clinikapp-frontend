// VIRTUAL API 


function API(){
		
		 this.response = {message:""};
		 
		 var eps = [
		            {_id : 'kjasdjkasd1', name : 'colsanitas', tels : [{barranquilla:345918213}] }, 
		            {_id : 'poiuasdhanq12', name : 'coomeva', tels : [{barranquilla:345918211}]  },
		            {_id : 'mmgsadtu1212', name : 'saludcoop', tels : [{barranquilla:34591826}] },
		            {_id : '9712jasnasas', name : 'sura',  tels : [{barranquilla:345918215}]},
		            {_id : 'myusadaskqwd', name : 'caprecom', tels : [{barranquilla:345918276}] }
		            ];		 	



		 this.centers_provider = function(){

		 	var centers = [
		 	{
		    _id : '97162182912a8s7as8a9',		    
		 	name:'clinica del caribe',		 	
		 	description : 'Clinica del caribe, brindamos la mejor atencion en el sector.',
		 	tel : 3017681,
		 	uci:true,
		 	urgencias:true,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ],
		 	 eps : []
		 	},
		 	{
		    _id : '97162182912aohh123',		 		
		 	name:'clinica santa maria',		 		 
		 	description : 'En la clinica santa maria, contamos con los mejores equipos en radiología a nivel de la costa.',
		 	tel : 3017682,
		 	uci:false,
		 	urgencias:true,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ],
		 	        eps : []
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
		 	        ],
		 	        eps : []
		 	},
		 	{
		    _id : '0812klasias712',		 		
		 	name:'clinica porto azul',		 		 
		 	description : 'En la clinica porto azul, contamos con la mejor sala de urgencias de la costa',
		 	uci:false,
		 	urgencias:false,
		 	tel : 3017685,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ],
		 	        eps : []
		 	},
		 	{
		 	_id : "lkmklmsad8981271",
		 	name:'clinica madre bernarda',		 			 
		 	description : 'En la clinica madre bernarda, ofrecemos el mejor servicio de UCI en colombia',
		 	tel : 3017687,
		 	uci:true,
		 	urgencias:false,
		 	doctors : [
		 	        {_id : '98127621612891029asa7612', name:'Juan Alberto', especiality : 'Ortopeedia'},
		 	        {_id : '98127621612891029asa7612', name:'Janna Zakzuk', especiality : 'Cardiología'},
		 	        {_id : '98127621612891029asa7612', name:'Alejandro Barboza', especiality: 'Pediatría'},
		 	        {_id : '98127621612891029asa7612', name:'Pedro Cure'}
		 	        ],
		 	        eps : []
		 	}
		 	];

		 	
		 	var data = [];

		 	if(!this.center_id)
		 	for(i = 0; i < 40; i++)
		 	{


		 			var index = Math.floor((Math.random() * 4) + 0);
		 			
		 			centers[index].display = centers[index].name; //middleware fake	

		 			var limit = Math.floor((Math.random() * 3) + 1);

		 			for(j=0;j<limit;j++)
		 			  centers[index].eps.push(eps[index].name); //middleware fake	

		 			data.push(centers[index]);

		 	}
		 	else
		 	 this.response.data = centers[centers.indexOf({_id:this.center_id})];


		 	this.response.data = data;
			
			return this;


		 }

		 this.eps_provider = function(){

		 	if(!this.eps_id)
		 	this.response.data =  eps;
		    else
		    this.response.data = eps[eps.indexOf({_id:this.eps_id})];

		   return this;


		 }

		 this.centers = function(id){		 	

		 	  !id || (this.center_id = id);
		 	  this.entity = 'centers';

		 	  return this;

		 }


		 this.eps = function(id){
		 	   !id || (this.eps_id = id);
		 	   this.entity = 'eps';

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

		 	  	  case 'eps':

		 	  	     return this.eps_provider();

		 	  	  break;
		 	  }

		      return this;
		 }

		 return this;

}


angular.module('clinikapp')
       .factory('$api', API)
       ;