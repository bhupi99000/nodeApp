(function(){
    'use strict';
    angular.module('myshop.adminModule.controller').controller('adminCtrl', ['$scope', 'dataService', 'appConfig', adminCtrl]);
    
    function adminCtrl($scope, dataService, appConfig){
        $scope.my_title = 'controller title';
        
        $scope.catName = '';
        $scope.catDesc = '';
        
        $scope.productList = {};
        $scope.categoryList = {};
        $scope.selectedItem = '';
//        $scope.catList = [];     //to populate the dropdown while creating new product.
        
        $scope.prdName = '';
        $scope.prdPrice = '';
        $scope.prdDiscount = '';
        $scope.prdDesc = '';
        
        $scope.createCategory = function(){
            var ajaxPromise = dataService.sendReceiveData({
                url: '/create_category',
                method: 'POST',
                data:{
                    catName: $scope.catName,
                    catDesc: $scope.catDesc
                }
            });
            
            ajaxPromise.then(function(response){
                if(response.status === 200){
                    $scope.getAllCategories();   //Getting the category list again
                }
            }, function(error){
                debugger;
            });
        };
        
        $scope.createProduct = function(){
            debugger;
            var ajaxPromise = dataService.sendReceiveData({
                url: '/createNewProduct',
                method: 'POST',
                data:{
                    catId: $scope.selectedItem['id'],
                    name: $scope.prdName,
                    price: $scope.prdPrice,
                    discount: $scope.prdDiscount,
                    desc: $scope.prdDesc
                }
            });  
            
            ajaxPromise.then(function(response){
                if(resonse.status === 200){
                    $scope.getProductList();    //Refreshing the list with newly added product
                }
            }, function(error){
                debugger;
            });
        };
        
        $scope.getProductList = function(){
            var ajaxPromise = dataService.sendReceiveData({
                url: '/getAllProductList',
                method: 'GET',
            });
            ajaxPromise.then(function(response){
                $scope.productList = response.data;        
            }, function(err){
                debugger;
            });
        };
        
        $scope.getAllCategories = function(){
            var ajaxPromise = dataService.sendReceiveData({
                url: '/getAllCategories',
                method: 'GET',
            });
            ajaxPromise.then(function(response){
                debugger;
                var data = response.data;   
//                
//                var d = data.map(function(item){
//                    return item.name;
//                });
                $scope.categoryList = data;
                $scope.selectedItem = data[0];   //first category default selected
                
            }, function(err){
                debugger;
            });
        };
        $scope.getAllCategories();
        $scope.getProductList();
    }
}());