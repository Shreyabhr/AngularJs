angular.module('main',[])
       .factory('MathService',function(){
           var factory = {};
           factory.multiply = function(a,b){
               return a * b;
           }
           return factory;
       })
       .service('calcService',function(MathService){
           this.square = function(a){
               return MathService.multiply(a,a);
           }
       })
       .controller('Controller',['$scope','calcService',function($scope,calcService){
          $scope.square = function(){
              $scope.result = calcService.square($scope.number);
          }
       }]);