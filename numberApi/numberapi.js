angular.module('main',[])
       .controller('numberapicontroller',['$http' ,'$scope',function($http, $scope){
           $scope.getResponse = function(){
               $http.get('http://numbersapi.com/' + $scope.number)
                    .then(function(response){
                        $scope.result = response.data;
                    }).catch(function(error){
                        console.log(error);

                    })
                console.log("end");
           }
       }])