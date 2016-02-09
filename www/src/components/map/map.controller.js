angular.module('near-me.map', [])
	.controller('MapController', function(
		$scope,
		$state,
		$stateParams,
		mapService
	) {



		$scope.themeColor = $stateParams.themeColor;
		$scope.placeTypeName = $stateParams.name;

		var icon_types = ['assets/img/type-1.png', 'assets/img/type-2.png', 'assets/img/type-3.png', 'assets/img/type-4.png'],
			selectedIconType = icon_types[$stateParams.iconType - 1],
			my_location;

		angular.extend($scope, {
			center: {
				lat: 10,
				lng: 0,
				zoom: 5
			},
			markers: {},
			defaultIcon: {}
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
							icon: {
								iconUrl: selectedIconType,
								iconSize: [30, 43], // size of the icon

							},
							focus: false
						}
					});

					//$scope.markers.m1.icon.markerColor = 'green'

					$scope.$digest($scope.markers)
				}
			)

		});

		$scope.goBack = function() {
			$state.go('home')
		}

	});