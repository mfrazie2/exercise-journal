angular.module('exercise-journal.home', [])
  .controller("HomePageController", function($scope) {
    $scope.user = {
      username: "Mike"
    };
  });
