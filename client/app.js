angular.module('exercise-journal', ['exercise-journal.home', 'ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: 'homePage/homepage.html',
        controller: 'HomePageController',
      });
  })
  .factory('Auth', ($http, $location, $window) => {
    const signin = function(user) {
      return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user,
      })
      .then((resp) => resp.data.token);
    };

    const signup = function(user) {
      return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user,
      })
      .then((resp) => resp.data.token);
    };

    const isAuth = function() {
      return !!$window.localStorage.getItem('com.exercise-journal');
    };

    const signout = function() {
      $window.localStorage.removeItem('com.exercise-journal');
      $location.path('/signin');
    };

    return {
      signin,
      signup,
      isAuth,
      signout,
    };
  });
