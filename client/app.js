angular.module('exercise-journal', ["exercise-journal.home","ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: "homePage/homepage.html"
        // controller: "HomePageController"
      });
  });