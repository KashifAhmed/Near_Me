angular.module('discover-area.map', [])
	.controller('MapController', function(
		$scope,
		$ionicHistory,
		$stateParams,
		ionicMaterialInk,
		mapService
	) {
		ionicMaterialInk.displayEffect();


		var my_location;

		angular.extend($scope, {
			center: {
				lat: 10,
				lng: 0,
				zoom: 5
			},
			markers: {}
		});

		mapService.getLocation(function(location) {

			$scope.center = {
				lat: location.lat,
				lng: location.long,
				zoom: 12
			};

			$scope.$digest($scope.center);
			mapService.getMarkers(
				new google.maps.LatLng(location.lat, location.long),
				document.getElementById('map'), [$stateParams.key],
				function(results) {
					results.forEach(function(marker) {

						var __location = marker.geometry.location.toJSON();

						$scope.markers[marker.id] = {
							lat: __location.lat,
							lng: __location.lng,
							message: marker.name,
							focus: false
						}
					});

					$scope.$digest($scope.markers)
				}
			)

		});

		$scope.goBack = function() {
			$ionicHistory.goBack();
		}

	});