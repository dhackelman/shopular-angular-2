(function() {
  angular.module('ShopApp').controller('LoginController', function($scope) {
    $scope.ownerObj = {
      username: '',
      password: ''
    };

    $scope.grabForm = function() {
      $scope.ownerObj = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      console.log($scope.ownerObj);
    };
  });

})();
