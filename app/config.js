var app = angular.module('app', [
  'ngRoute',
  'appControllers',
  'ngAnimate'
]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/inicio', {
        templateUrl: 'app/inicio.html',
        controller: 'inicioCtrl'
      }).
      otherwise({
        redirectTo: '/inicio'
      });
  }]);


var appControllers = angular.module('appControllers', ['ngAnimate']);

appControllers.controller('inicioCtrl', ['$scope', '$http',
  function ($scope, $http) {

   	$scope.func={
   		showDiv:function(obj,elem){
   			if(obj[elem])
   			{
   				obj[elem]=false;
   			}
   			else
   			{
				obj[elem]=true;
   			}
   		},
   		addLike:function(elem) {
   			if(!elem.like.state)
   			{
   				elem.like.cant = elem.like.cant+1;
   				elem.like.state=true;
   			}
   			
   		}
   	};

   	$scope.obj={
   		elemento:{
   			lista:[
   				{
   					id:0,
   					categoria:{id:0,nombre:'#loNuevo'},
   					nombre:'#excel2016',
   					creador:'@jeisson',
   					fecha:'01/01/2016',
   					tags:'_excel2016,_bi',
   					refs:[{id:0,nombre:'http://www.microsofttrends.com/2015/03/16/key-features-coming-in-excel-2016-for-business-intelligence/',link:'http://www.microsofttrends.com/2015/03/16/key-features-coming-in-excel-2016-for-business-intelligence/'}],
   					comm:true,
   					info:false,
   					like:{cant:0,state:false}
   				}
   				,{
   					id:1,
   					categoria:{id:0,nombre:'#loNuevo'},
   					nombre:'#excel2015',
   					creador:'@jeisson',
   					fecha:'01/01/2016',
   					tags:'_excel2016,_bi',
   					refs:[{id:0,nombre:'http://www.microsofttrends.com/2015/03/16/key-features-coming-in-excel-2016-for-business-intelligence/',link:'http://www.microsofttrends.com/2015/03/16/key-features-coming-in-excel-2016-for-business-intelligence/'}],
   					comm:true,
   					info:false,
   					like:{cant:0,state:false}
   				}],
   			filtro:{
   				general:{}
   			}
   		},
   		menu:{
   			categorias:[{id:0,nombre:'#loNuevo'},{id:1,nombre:'#preguntas'},{id:2,nombre:'#videos'}]
   		}
   		
   	};


  }]);

