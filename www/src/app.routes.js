angular.module('near-me.route', [])
	.config(function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'src/components/home/home.html',
				controller: 'HomeController'
			});

		$stateProvider
			.state('map', {
				url: '/map/:key/:name/:themeColor/:iconType',
				templateUrl: 'src/components/map/map.html',
				controller: 'MapController',
				cache: false
			})

	});