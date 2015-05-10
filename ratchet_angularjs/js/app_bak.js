// // Defining angular application model
// // for Pomidoro app

// var pomidoroApp = angular.module('pomidoroApp',[]);

// ////////// ROUTING ///////////////////////// Deffining $routeProvider for Pomidoro applicatiom module

// pomidoroApp.config(function ($routeProvider) {
//  $routeProvider

//      // We are going to define routes,
//         // controllers and templates associated
//         // with these routes.
//         // You can change these but make sure
//         // you know what you are doing

//         // main route

//         .when('/',
//      {
//          controller: 'RootController',
//          templateUrl: 'views/RootControllerView.html'
//      })



//      // login list page
//              .when('/login',
//      {
//          controller: 'LoginController',
//          templateUrl: 'views/LoginControllerView.html'

//      })

//      // signup page
//              .when('/signup',
//      {
//          controller: 'SignupController',
//          templateUrl: 'views/SignupControllerView.html'

//      })

//              .when('/Show_movie/:movieid', 
//      {
//          controller: 'ShowmovieController',
//          templateUrl: 'views/show_movie.html'
//      })

//      // if non of the above routes
//      // are matched we are setting router
//      // to redirect to the RootController
//      .otherwise({ redirectTo: '/'});
// });


// //Rootcontroller
// pomidoroApp.controller('RootController', function($scope, $http){
//  // Controller is going to set recommendedMovies
//     // variable for the $scope object in order for view to
//     // display its contents on the screen as html 
//     // $scope.recommendedMovies = [];

//     // // Just a housekeeping.
//     // // In the init method we are declaring all the
//     // // neccesarry signup and assignments
//     // init();

//     // function init(){
//     //   $scope.recommendedMovies = recommendedMoviesFactory.getRecommended();
//     // }

//     $http.get("MoviesExample.json")
//     .success(function (response) {$scope.recommendedMovies = response.records;});
// });


// pomidoroApp.controller('customersCtrl', function($scope, $http) {
//   $http.get("MoviesExample.json")
//   .success(function (response) {$scope.names = response.records;});
// });

// pomidoroApp.controller('LoginController', function($scope, loginFactory){
//  // This controller is going to set login
//     // variable for the $scope object in order for view to
//     // display its contents on the screen as html 

//     init();

//     function init(){
//      $scope.login = loginFactory.getlogin();
//     }
// });

// pomidoroApp.controller('SignupController', function($scope){
//     // This controller is going just to serve the view
// });


// pomidoroApp.controller('ShowmovieController', function($scope, $routeParams, $http, $location) {

//     $scope.movie_id = $routeParams.movieid;

//     $http.get("MoviesExample.json")
//     .success(function (response) {$scope.pt = $routeParams.id;});




// });

// pomidoroApp.controller('validateCtrl', function($scope) {
//     $scope.fullname = 'Kautik Mistry';
//     $scope.email = 'kautikmistry@gmail.com';
//     $scope.password = '123456789';
// });




// ///////////// FACTORIES //////////////////////////
// // Defining recommendedMovies factory
// // It has 5 recommended movies and 
// // makes them available to controller
// // so it can pass values to the template
// pomidoroApp.factory('recommendedMoviesFactory', function(){
//   var recommended = [
//         { movieid: '1', name: 'World War Z', description: 'The story revolves around United Nations employee Gerry Lane (Pitt), who traverses the world in a race against time to stop a pandemic', img: 'img/wardwarz.png', link: './wardwarz'},
//         { movieid: '2', name: 'Star Trek Into Darkness', description: 'When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for', img: 'img/intodarkness.png', link: 'www.google.com'},
//         { movieid: '3', name: 'The Iceman', description: 'Appearing to be living the American dream as a devoted husband and father in reality Kuklinski was a ruthless killer-for-hire.', img: 'img/wardwarz.png', link: 'www.google.com'},
//         { movieid: '4', name: 'Iron Man 3', description: 'When Stark finds his personal world destroyed at his enemys hands, he embarks on a harrowing quest to find those responsible.', img: 'img/wardwarz.png', link: 'www.google.com'},
//         { movieid: '5', name: 'Django Unchained', description: 'Set in the South two years before the Civil War, Django Unchained stars Jamie Foxx as Django', img: 'img/wardwarz.png', link: 'www.google.com'}      
//     ];

//    var recommended = $http.get("MoviesExample.json")
//   .success(function (response) {$scope.names = response.records;});

//      var factory = {};
//      factory.getRecommended = function(){
//          return recommended;
//      }
//      return factory;
// });


// pomidoroApp.factory('detailMoviesFactory', function(){
//    var data = [
//         { movieid: '1', name: 'World War Z', description: 'The story revolves around United Nations employee Gerry Lane (Pitt), who traverses the world in a race against time to stop a pandemic', img: 'img/wardwarz.png', link: './wardwarz'},
//         { movieid: '2', name: 'Star Trek Into Darkness', description: 'When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for', img: 'img/intodarkness.png', link: 'www.google.com'},
//         { movieid: '3', name: 'The Iceman', description: 'Appearing to be living the American dream as a devoted husband and father in reality Kuklinski was a ruthless killer-for-hire.', img: 'img/wardwarz.png', link: 'www.google.com'},
//         { movieid: '4', name: 'Iron Man 3', description: 'When Stark finds his personal world destroyed at his enemys hands, he embarks on a harrowing quest to find those responsible.', img: 'img/wardwarz.png', link: 'www.google.com'},
//         { movieid: '5', name: 'Django Unchained', description: 'Set in the South two years before the Civil War, Django Unchained stars Jamie Foxx as Django', img: 'img/wardwarz.png', link: 'www.google.com'}      
//     ];

//     return {
//       getdata: function(movieid) {
//         if (movieid === 0) {
//           return data;
//         } else {
//           return data[movieid - 1];
//         }
//       }
//     };

// });


// // Defining loginFactory factory
// // In this example it has 5 movie theatres 
// // but in real live application you would 
// // want it to get this data from the web
// // service, based on the the movie selected
// // by user

// pomidoroApp.factory('loginFactory', function(){
//  var theatres = [
//      {
//          name: 'Everyman Walton', address: '85-89 High Street London'
//      },

//      {
//          name: 'Ambassador Cinemas', address: '85-89 High Street London'
//      },

//      {
//          name: 'ODEON Kingston', address: 'larence Street Kingston Upon Thames'
//      },

//      {
//          name: 'Curzon Richmond', address: '3 Water Lane Richmond'
//      },

//      {
//          name: 'ODEON Studio Richmond', address: '6 Red Lion Street Richmond'
//      },

//  ];

//  var factory = {};
//  factory.getlogin = function(){
//      return theatres;
//  }
//  return factory;
// });



var app = angular.module("kautikapp", ['ngStorage']);


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
    var promise = kautikService.getmovies();
    promise.then(function(data) {
        $scope.recommendedMovies = data.data.records;
        console.log($scope.recommendedMovies);
    });

    $scope.data1 = $localStorage.message;

})


.controller("ShowmovieController", function($scope, $routeParams, kautikService) {


    kautikService.getById($routeParams.id).then(function(movie) {
        $scope.movie = movie;
    });
    console.log($scope.movie);

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

});

app.controller('LoginController', function($scope, $localStorage,$location) {
    $scope.save = function() {
        $localStorage.message = $scope.emailaddress;
        $scope.data1 = $localStorage.message;
        console.log($scope.data1)
        //$location.path("/2");
    }
});