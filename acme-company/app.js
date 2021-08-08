angular.module('spa',['ngRoute'])
       .config(['$routeProvider',function($routeProvider){
           $routeProvider

           .when('/',{
               templateUrl: 'Templates/home.html',
           })

           .when('/product',{
            templateUrl: 'Templates/product.html',
            controller: 'productController'
           })

            .when('/home',{
                templateUrl: 'Templates/home.html',
            })

            .when('/productDetails',{
                templateUrl: 'Templates/productDetails.html',
                controller: 'detailsController'
            })


       }])