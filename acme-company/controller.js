angular.module('spa')
       .filter('currencyFilter',function(){
           return function(input){
               return '$'+input;
           }
       })
       .filter('stars',['$sce',function($sce){
        return function(totalStars){
            var star = "<span class = 'glyphicon glyphicon-star'></span>";
            var div = "<div>" + star.repeat(totalStars-1);

            if(!Number.isInteger(totalStars)){
    
                div += '<i class="glyphicon glyphicon-star half"></i>' + '</div>'
            }
            div += "</div>";
            var outerDivSize = 0.12 * totalStars;
            var style = "style='width: "+ outerDivSize + "pt;height:14px;overflow:hidden";
            var outerDiv = '<div' + style + '>' + div + '<div>';
            return $sce.trustAsHtml(outerDiv);
        }
    }])
       .factory('itemFactory',function(){
           var item = {}
           item.setdata = function(product){
               item = product;
           }
           item.getdata = function(){
               return item;
           }
           return item;
       })
       .controller('productController',['$scope','$location','productService','itemFactory',function($scope,$location,productService,itemFactory){
        $scope.isDisplay = false;
        productService.getProducts().then(function(response){
               $scope.products = response.data;
               console.log($scope.products)
           }).catch(function(error){
               console.log(error);
           })

           $scope.display = function(data){
            itemFactory.setdata(data);
            $location.path('/productDetails');
          }

          $scope.toggle = function(){
            if($scope.isDisplay === true){
                $scope.isDisplay = false;
                document.getElementById('showImage').innerHTML = 'Show Image';
                return;
            }        
            $scope.isDisplay = true;
            document.getElementById('showImage').innerHTML = 'Hide Image';    
          }
           
       }])

       .controller('detailsController',['$scope','$location','itemFactory',function($scope,$location,itemFactory){
           console.log('inside details')
           var singleProduct = {}
           singleProduct = itemFactory.getdata();
           $scope.name = singleProduct.productName;
           $scope.code = singleProduct.productCode;
           $scope.description = singleProduct.description;
           $scope.avail = singleProduct.releaseDate;
           $scope.price = singleProduct.price;
           $scope.rating = singleProduct.starRating;       
           $scope.image =    singleProduct.imageUrl;

           $scope.goBack = function(){
               console.log('back');
               $location.path('/product');
           }
       }])