angular.module('exercise-journal', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "homePage/homepage.html",
        controller: "HomePageController"
      });
  });