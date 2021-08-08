angular.module('spa',['ngRoute'])
       .config(['$routeProvider',function($routeProvider){
           $routeProvider

           .when('/',{
               templateUrl: 'Templates/home.html',
               controller: 'homeController'
           })

           .when('/add',{
            templateUrl: 'Templates/add.html',
            controller: 'addController'
           })

           .when('/edit/:id',{
            templateUrl: 'Templates/edit.html',
            controller: 'editController'
            })

            .when('/home',{
                templateUrl: 'Templates/home.html',
                controller: 'homeController'
            })


       }])