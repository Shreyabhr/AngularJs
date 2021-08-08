angular.module('spa')
       .directive('shreyaHeader',function(){
           var directive = {};
           directive.restrict = 'E',
           directive.template = "<p>No of students : {{studentData.length}}<p>"
           return directive;
       })
       .filter('genderFilter',function(){
           return function(input){
               if(input){
                   return 'male'
               }
               return 'female'
           }
       })
       
       .factory('myFactory',function(){
           var savedData = {}
           function set(data){
               savedData = data;
           }
           function get(){
               return savedData;
           }
           return {
               set : set,
               get : get
           }
       })
       .controller('addController',['$scope','$window','$timeout','$location','studentService',function($scope,$window,$timeout,$location,studentService){
            console.log('inside add')
            var students = {};
            $scope.add = function(){     
                document.getElementById('spinner').style.display = 'block';          
                students.name = $scope.name;
                students.rollno = $scope.rollno;
                students.email = $scope.email;
                students.age = $scope.age;
                students.date = $scope.date;
                students.gender = $scope.gender;
                studentService.addStudent(angular.toJson(students)).then(function(response){
                    console.log(response);
                    document.getElementById('spinner').style.display = 'none';  
                    $window.alert("Student added succesfully!!!")
                    $timeout(function () {
                        $location.path('/');
                    }, 2000);
                }).catch(function(error){
                    console.log(error);
                })
            }
       }])
       .controller('editController',['$scope','$location','$window','myFactory','studentService',function($scope,$location,$window,myFactory,studentService){
            console.log('inside edit')
            var data = myFactory.get();
            console.log(data);
            $scope.name = data.name;
            $scope.email = data.email;
            $scope.rollno = data.rollNo;
            $scope.age = data.age;
            $scope.date = new Date(data.date);
            $scope.gender = data.isMale; 
             
            $scope.update = function(){     
                var students = {}
                students.name = $scope.name;
                students.rollno = $scope.rollno;
                students.email = $scope.email;
                students.age = $scope.age;
                students.date = $scope.date;
                students.gender = $scope.gender;
                console.log(students);                                
                studentService.updateStudent(data.id,students).then(function(response){
                    console.log(response.data);
                    $window.alert("Student updated succesfully!!!")
                    $timeout(function () {
                        $location.path('/');
                    }, 2000);
                }).catch(function(error){
                    console.log(error);
                }) 
            }
            
            
        
       }])
       .controller('homeController',['$scope','$window','$location','studentService','myFactory',function($scope,$window,$location,studentService,myFactory){
            studentService.getStudents().then(function(response){
                console.log('inside controller')
                $scope.studentData = response.data;
                document.getElementById('table').style.display = 'block'; 
            }).catch(function(error){
                console.log(error);
            })

            $scope.delete = function(id){
                var r = confirm("Are you sure you want to delete");
                if (r == true) {
                studentService.deleteStudent(id).then(function(response){
                    $window.alert("Student deleted succesfully!!!")
                    studentService.getStudents().then(function(response){
                        $scope.studentData = response.data;
                        document.getElementById('table').style.display = 'block'; 
                    }).catch(function(error){
                        console.log(error);
                    })
                }).catch(function(error){
                    console.log(error);
                })
                } 
            }

            $scope.edit = function(id,data){               
                myFactory.set(data);
                $location.path('/edit/' + id);
            }

       }])