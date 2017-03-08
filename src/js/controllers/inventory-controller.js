(function() {
  angular.module('ShopApp').controller('InventoryController', function($scope, StorageService) {
    StorageService.get('users');
    $scope.user = StorageService.get('users');
  });

})();
