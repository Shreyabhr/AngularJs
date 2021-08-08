angular.module('spa')
       .controller('carrerController',['$scope',function($scope){
           $scope.message = "From Carrer"
       }])
       .controller('aboutController',['$scope',function($scope){
        $scope.message = "From About"
       }])
       .controller('homeController',['$scope',function($scope){
        $scope.message = "From Home"
       }])