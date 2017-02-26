(function(){
    'use strict';
    angular.module('myshop.adminModule.controller')
        .controller('adminCtrl', ['$scope', '$uibModal', '$document', 'catService', 'prodService',  ctrlHandler]);
    
    function ctrlHandler($scope, $uibModal, $document, catService, prodService){        
        $scope.showModal = function(config){
            $scope.$broadcast('showModal');
        };
        
        $scope.catListData = null;
        $scope.prodListData = null;
        
       $scope.init = function(){
           $scope.getAllCategories();
       };
        
       $scope.getAllCategories = function(){
           catService.getAllCategories(function(err, catData){
               if(err){
                   console.log(err);
                   return;
               }
               $scope.catListData = catData;
           });
       };
        
       $scope.getProductList = function(catId){
           prodService.getProductList(catId, function(err, prodData){
               debugger;
               if(err){
                   console.log(err);
                   return;
               }
               debugger;
               $scope.prodListData = prodData;
           });
       };
        
       $scope.$on('updateCategory', function(){
          $scope.getAllCategories(); 
       });
        
       $scope.$on('updateProductList', function($event, catId){
           $scope.getProductList(catId);
        });
        
       $scope.init();  //initializing the view
    }
}());