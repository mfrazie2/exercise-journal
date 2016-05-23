angular.module('exercise-journal.auth', [])

.controller('AuthController', ($scope, $window, $location, Auth) => {
  $scope.user = {};

  $scope.signin = () => {
    Auth.signin($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signup = () => {
    Auth.signup($scope.user)
      .then((token) => {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  $scope.signout = function() {
    Auth.signout();
  };
});
