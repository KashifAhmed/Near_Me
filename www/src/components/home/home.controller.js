angular.module('near-me.home', [])
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
			background: '#1abc9c',
			iconType: 1
		}, {
			name: "Air Port",
			key: "airport",
			background: '#e67e22',
			iconType: 2
		}, {
			name: "Hospital",
			key: "hospital",
			background: '#e74c3c',
			iconType: 3
		}, {
			name: "Amusement Park",
			key: "amusement_park",
			background: '#2ecc71',
			iconType: 1
		}, {
			name: "Bank",
			key: "bank",
			background: '#e67e22',
			iconType: 2
		}, {
			name: "Book Store",
			key: "book_store",
			background: '#2ecc71',
			iconType: 1

		}, {
			name: "Beauty Salon",
			key: "beauty_salon",
			background: '#f1c40f',
			iconType: 4
		}, {
			name: "Mosque",
			key: "mosque",
			background: '#2ecc71',
			iconType: 1
		}, {
			name: "Car Wash",
			key: "car_wash",
			background: '#f1c40f',
			iconType: 4
		}];


		$scope.viewMarkers = function(place) {
			$state.go('map', {
				"key": place.key,
				"name": place.name,
				"themeColor": place.background,
				'iconType': place.iconType
			});
		}
	})