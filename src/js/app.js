(function () {

  const app = angular.module('ShopApp', ['ui.router', 'LocalStorageModule']);

  angular.module('ShopApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('ShopParent', {
      url:'/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('ShopParent.login', {
        url: 'login',
        templateUrl: './templates/login.html',
        controller: 'LoginController as loginCtrl',
    }).state('ShopParent.inventory', {
          url: 'inventory',
          templateUrl: './templates/inventory.html'
      });
    });
})();
