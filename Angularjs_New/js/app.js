var demoApp = angular.module("demoApp", []);

demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'RootController',
            templateUrl: 'views/RootControllerView.html'
        })
        .when('/Addcustomer', {
            controller: 'AddcustomerController',
            templateUrl: 'views/AddcustomerControllerView.html'
        })

});


// $scope injected dynamically
demoApp.controller('RootController', function($scope) {
    $scope.customers = [{
        name: 'mistry',
        city: 'surat'
    }, {
        name: 'admin',
        city: 'mumbai'
    }, {
        name: 'kautik',
        city: 'ahmedabad'
    }, {
        name: 'mistry kautik',
        city: 'Jammu'
    }, ];

    //$scope with push data into array
    $scope.Addcustomer = function() {
        $scope.customers.push({
            name: $scope.newcustomer.name,
            city: $scope.newcustomer.city,
        });
    };
});