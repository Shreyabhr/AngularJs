angular.module('spa')
       .factory('productService',['$http',function($http){
           var product = {};
           product.getProducts = function(){
               console.log('inside service')
               return $http.get('products.json')
           }
           return product;
       }])