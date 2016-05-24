app.module('exerciseForm', [])
  .controller('ExerciseForm', ($scope) => {
    $scope.newEntry = {};
    
    $scope.submitEntry = () => {
      console.log('This will eventually make it to the server and database');
      console.log('For now, here is what you\'re submitting...', $scope.newEntry);
    };
  });