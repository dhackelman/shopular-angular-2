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
