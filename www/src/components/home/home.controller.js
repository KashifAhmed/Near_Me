angular.module('discover-area.home', [])
	.controller('HomeController', function(
		$scope,
		ionicMaterialInk,
		ionicMaterialMotion,
		$state,
		$timeout) {


		/*For Animation*/
		/*$scope.$parent.showHeader();
		$scope.$parent.clearFabs();
		$scope.$parent.setHeaderFab('left');
*/
		// Delay expansion
		$timeout(function() {
			$scope.isExpanded = true;
			ionicMaterialMotion.fadeSlideInRight();
		}, 300);
		$scope.isExpanded = false;

		// Set Ink
		ionicMaterialInk.displayEffect();

		$scope.places = [{
			name: "Home Goods Store",
			key: "home_goods_store",
			background: '#1abc9c'
		}, {
			name: "Air Port",
			key: "airport",
			background: '#e67e22'
		}, {
			name: "Hospital",
			key: "hospital",
			background: '#e74c3c'
		}, {
			name: "Amusement Park",
			key: "amusement_park",
			background: '#2ecc71'
		}, {
			name: "Bank",
			key: "bank",
			background: '#e67e22'
		}, {
			name: "Book Store",
			key: "book_store",
			background: '#2ecc71'

		}, {
			name: "Beauty Salon",
			key: "beauty_salon",
			background: '#f1c40f'
		}, {
			name: "Mosque",
			key: "mosque",
			background: '#2ecc71'
		}, {
			name: "Car Wash",
			key: "car_wash"
		}];


		$scope.viewMarkers = function(place) {
			$state.go('map', {
				"key": place.key,
				"name": place.name,
				"themeColor": place.background
			});
		}
	})