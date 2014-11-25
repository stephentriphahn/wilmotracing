var app = angular.module('wilmotRacing', ["ngRoute"]);

app.controller('mainCtrl', function($scope){
});


app.config(function($routeProvider){
   $routeProvider
      .when('/', {
         templateUrl:'views/home.html',
         controller:'mainCtrl'
      })
		.when('/home', {
			templateUrl:'views/home.html'
		})
		.when('/news', {
			templateUrl:'views/news.html'
		})
		.when('/bio', {
			templateUrl:'views/bio.html'
		})
		.when('/development', {
			templateUrl:'views/development.html'
		})
		.when('/schedule', {
			templateUrl: 'views/schedule.html'
		})
		.when('/gallery', {
			templateUrl: 'views/gallery.html'
		})
		.when('/videos', {
			templateUrl: 'views/videos.html'
		})
		.when('/sponsors', {
			templateUrl: 'views/sponsors.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html'
		})
      .otherwise({
         redirectTo: '/'
      });
});
      
