angular.module('main',[])
       .controller("MainController",['$scope',function($scope){
           $scope.student = {              
               name : 'shreya',
               roll : 10,
               cgpa: 8.3,
           }
       }])
