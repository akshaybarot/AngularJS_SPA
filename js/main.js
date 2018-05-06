
var app = angular.module("Demo", ["ngRoute"]); 
	app.config(function ($routeProvider) {
		$routeProvider
			.when("/first_page", {
				templateUrl: "templates/first_page.html",
			})
			.when("/first_page/second_page", {
				templateUrl: "templates/second_page.html",
			})
			.when("/first_page/second_page/third_page", {
				templateUrl: "templates/third_page.html",
			})
			.when("/first_page/second_page/third_page/forth_page", {
				templateUrl: "templates/forth_page.html",
			})
			
	});




