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


demoApp.factory('SimpleFactory', function ($http) {
    
    var customers = 'customer.json';
    var factory = {};
    factory.getCustomer = function() {
        return $http.get(customers);
    };
    factory.postCustomer = function(customer){
    }
    return factory;
});

// $scope injected dynamically
demoApp.controller('RootController', function($scope, SimpleFactory) {
    $scope.customers = [];
    init();
    function init(){
        $scope.customers = SimpleFactory.getCustomer()
            .success(function (custs) {
                $scope.customers = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    //$scope with push data into array
    $scope.Addcustomer = function() {
        $scope.customers.push({
            name: $scope.name,
            city: $scope.city,
        });
    };
});