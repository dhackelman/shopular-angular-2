'use strict';

(function () {

  var app = angular.module('ShopApp', ['ui.router', 'LocalStorageModule']);

  angular.module('ShopApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('ShopParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('ShopParent.login', {
      url: 'login',
      templateUrl: './templates/login.html',
      controller: 'LoginController as loginCtrl'
    }).state('ShopParent.inventory', {
      url: 'inventory',
      templateUrl: './templates/inventory.html',
      controller: 'InventoryController as invenCtrl'
    });
  });
})();
'use strict';

(function () {
  angular.module('ShopApp').controller('InventoryController', function ($scope, StorageService) {
    StorageService.get('users');
    $scope.user = StorageService.get('users');
  });
})();
'use strict';

(function () {
  angular.module('ShopApp').controller('LoginController', function ($scope, $state, StorageService) {
    $scope.ownerObj = {
      username: '',
      password: ''
    };

    $scope.grabForm = function () {
      $scope.ownerObj = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      console.log($scope.ownerObj);
      StorageService.set('users', $scope.ownerObj);
      $state.go('ShopParent.inventory');
    };

    // $state.go('ShopApp.inventory');
  });
})();
'use strict';

angular.module('ShopApp').service('inventoryService', GetInventory);

function GetInventory($http) {
    function getInventory(url) {
        return $http({
            method: 'GET',
            url: './src/js/data/inventory.json'
        });
    }

    return {
        get: getInventory
    };
}
'use strict';

(function (ng) {
    "use strict";

    ng.module('ShopApp').service('StorageService', function (localStorageService) {
        function setItems(key, value) {
            localStorageService.set(key, value);
        }

        function getItems(key) {
            return localStorageService.get(key);
        }

        return {
            set: setItems,
            get: getItems
        };
    });
})(angular);