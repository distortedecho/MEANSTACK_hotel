angular.module('meanhotel', ['ngRoute']).config(config)
 function config($routeProvider,$locationProvider){
$locationProvider.hashPrefix('');
 $routeProvider
 	.when('/', {
 		templateUrl: 'angularapp/hotelslist/hotels.html',
 		controller: 'HotelsController',
 		controllerAs:'vm'
 	})
 	.when('/hotel/:id',{
 		templateUrl:'angularapp/hotel-display/hotel.html',
 		controller: HotelController,
 		controllerAs:'vm'
 	});
 }
