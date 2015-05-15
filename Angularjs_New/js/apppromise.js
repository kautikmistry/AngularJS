var demoApp = angular.module("demoApp", []);

demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'RootController',
            templateUrl: 'views/RootControllerView.html'
        })

});


demoApp.factory('SimpleFactory', function($http, $q) {
    var deferred = $q.defer();
    return {
        getCustomer: function(){
            $http.get('customer.json')
                .then(function(data){
                    deferred.resolve(data);
                });
             return deferred.promise;
            } 
    };
})




// $scope injected dynamically
demoApp.controller('RootController', function($scope, SimpleFactory) {
    var demo = SimpleFactory.getCustomer();
    demo.then(function(data){
        $scope.customers =data.data;
    });
   
});

demoApp.controller('validateCtrl', function($scope) {
    $scope.name = 'Enter Your Name';
    $scope.email = 'Example@gmail.com';
});