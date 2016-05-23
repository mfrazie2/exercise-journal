angular.module('exercise-journal.home', [])
  .controller('HomePageController', ($scope) => {
    $scope.user = {
      username: 'Mike',
    };
  });
