var rootApp = angular.module('wajibu',['ui.router']);

rootApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider){
  $stateProvider
		.state('index',{
		    url:'/@index',
			controller:'index',
			templateUrl:'views/main.html'
    })
  $urlRouterProvider.otherwise('/@index');
}]);
