var app = angular.module("ag-app", ['ngStorage']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'views/LoginControllerView.html'
        })
        .when('/Root', {
            controller: 'RootController',
            templateUrl: 'views/RootControllerView.html'

        })
        .when('/signup', {
            controller: 'SignupController',
            templateUrl: 'views/SignupControllerView.html'

        })
        .when('/Show_movie/:id', {
            controller: 'ShowmovieController',
            templateUrl: 'views/show_movie.html'
        })
        .when('/Setting', {
            controller: 'SettingController',
            templateUrl: 'views/SettingControllerView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.factory('kautikService', function($http, $q) {
    var movies = null;
    var deferred = $q.defer();
    // this.getmovies = function(){
    //  return deferred.promise;
    // }
    return {
        getmovies: function() {
            if (!movies) {

                $http.get('MoviesExample.json').then(function(data) {
                    movies = data;
                    deferred.resolve(data);
                });
            }
            return deferred.promise;
        },
        getById: function(movieId) {
            var deferred = $q.defer();
            var _getById = function(id) {
                var arr = movies.data.records;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == id) {
                        console.log("ID found: " + arr[i].id);
                        return arr[i];
                    }
                }
            }

            if (!movies) {
                this.getmovies().then(function(movies) {
                    deferred.resolve(_getById(movieId))
                })
            } else {
                deferred.resolve(_getById(movieId))
            }
            return deferred.promise;
        }

    };

})

// app.factory('uniqueness', function () {
//     var usernames = [
//         'kautik',
//         'admin'
//     ];

//     return {
//         taken: function(name){
//             return usernames.indexOf(name) >= 0;
//         }
//     }
// })


.controller("RootController", function($scope, kautikService, $localStorage, $location) {
    if ($localStorage.email) {
        var promise = kautikService.getmovies();
        promise.then(function(data) {
            $scope.recommendedMovies = data.data.records;
            console.log($scope.recommendedMovies);
        });

        $scope.data1 = $localStorage.email;
        console.log($scope.data1)

        $scope.logout = function() {
            console.log("befor:" + $scope.data1);
            delete $localStorage.email;
            console.log("after:" + $scope.data1);
        }
    } else {
        //window.alert("not localstorage");
        $location.path('/');
    }

})


.controller("ShowmovieController", function($scope, $routeParams, kautikService) {


    kautikService.getById($routeParams.id).then(function(movie) {
        $scope.movie = movie;
    });
    // var promise = kautikService.getmovies();
    //    promise.then(function(data) {
    //        //$scope.recommendedMovies = data.data.records;
    //        var data1 = data.data.records;
    //        console.log(data1);
    //        for(var i = 0; i < data1.length; i++) {
    //         $scope.recommendedMovies = data1[i];
    //         if($scope.recommendedMovies.id === $routeParams.id) {
    //             console.log($scope.recommendedMovies);
    //         return $scope.recommendedMovies;
    //         }
    //        }
    //    });

})

app.controller('validateCtrl', function($scope) {
    $scope.fullname = 'Kautik Mistry';
    $scope.email = 'kautikmistry@gmail.com';
    $scope.password = '123456789';
});


app.controller('SignupController', function($scope) {
    // This controller is going just to serve the view
    $scope.Signup = function() {
        $location.path("/");
    }
});

app.controller('LoginController', function($scope, $localStorage, $location) {
    $scope.Login = function() {
        $localStorage.email = $scope.emailaddress;
        $scope.data1 = $localStorage.email;
        console.log($scope.data1)
        $location.path("/Root");
    }

});

app.controller('SettingController', function($scope, $localStorage, $location) {
    // This controller is going just to serve the view
    $scope.settingapply = function() {
        $localStorage.appset = $scope.Color;
        $scope.data2 = $localStorage.appset;
        console.log($scope.data2);
    }

});

// app.directive('hallo', [function () {
//     return {
//         require: 'ngModel'
//         link: function ($scope, $element, $attrs, ngModelCtrl) {
//             $element.hallo({
//                 plugins: {
//                     'halloformat': {},
//                     'halloblock': {},
//                     'hallojustify': {},
//                     'hallolists': {},
//                     'halloreundo': {}
//                 }
//             });
//             ngModelCtrl.$render = function (){
//                 var contents = ngModelCtrl.$viewValue;
//                 $element.hallo('setContents', contents);
//             }
//         }
//     };
// }])