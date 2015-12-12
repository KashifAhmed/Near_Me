angular.module('discover-area.home', [])
	.controller('HomeController', function(
		$scope,
		ionicMaterialInk,
		ionicMaterialMotion,
		$state) {
		ionicMaterialInk.displayEffect();

		$scope.places = [{
			name: "Home Goods Store",
			key: "home_goods_store"
		}, {
			name: "Air Port",
			key: "airport"
		}, {
			name: "Hospital",
			key: "hospital"
		}, {
			name: "Amusement Park",
			key: "amusement_park"
		}, {
			name: "Jewelry Store",
			key: "jewelry_store"
		}, {
			name: "Art Gallery",
			key: "art_gallery"
		}, {
			name: "Laundry",
			key: "laundry"
		}, {
			name: "Bank",
			key: "bank"
		}, {
			name: "Book Store",
			key: "book_store",

		}, {
			name: "Bicycle Store",
			key: "bicycle_store"
		}, {
			name: "Beauty Salon",
			key: "beauty_salon"
		}, {
			name: "Mosque",
			key: "mosque"
		}, {
			name: "Car Wash",
			key: "car_wash"
		}];


		$scope.viewMarkers = function(key) {
			$state.go('map', {
			"key": key
			});
		}
	})