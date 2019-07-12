angular
	.module('mainApp')

	.config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider) {
		
		$stateProvider
			.state('home', {
				url: 'app/views/main.html',
				
			})
	}])