angular.module('spa')
       .factory('studentService',['$http',function($http){
           var students = {}
           students.addStudent = function(student){
               return $http.post('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students',student)

           }

           students.updateStudent = function(id, data){
               return $http.put('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/'+id, data)
           }

           students.deleteStudent = function(id){
               return $http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/'+id)

           }
           students.getStudents = function(){
               return $http.get('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students')
               
           }
           return students;
       }])