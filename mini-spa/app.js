angular.module('spa',['ngRoute'])
       .config(['$routeProvider',function($routeProvider){
           $routeProvider

           .when('/',{
               templateUrl: 'fragments/home.html',
               controller: 'homeController'
           })

           .when('/about',{
            templateUrl: 'fragments/about.html',
            controller: 'aboutController'
           })

           .when('/carrer',{
            templateUrl: 'fragments/carrer.html',
            controller: 'carrerController'
            })

            .when('/home',{
                templateUrl: 'fragments/home.html',
                controller: 'homeController'
            })


       }])