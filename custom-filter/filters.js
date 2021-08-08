angular.module('main',[])
       .filter('filler',function(){
           return function(input){
               return 'Custom ' + input;


           }
       })
       .controller('Controller',['$scope','$rootScope',function($scope,$rootScope){
        $scope.tutorial = 'filter';
       }]);