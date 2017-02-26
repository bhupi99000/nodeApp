(function(){
    'use strict';
    angular.module('myshop.adminModule.controller')
        .controller('adminCtrl', ['$scope', '$uibModal', '$document', 'catService',  ctrlHandler]);
    
    function ctrlHandler($scope, $uibModal, $document, catService){        
        $scope.showModal = function(config){
            $scope.$broadcast('showModal');
        };
        
        $scope.catListData = null;
        
        
       $scope.init = function(){
           $scope.getAllCategories();
       };
        
       $scope.getAllCategories = function(){
           catService.getAllCategories(function(err, catData){
               if(err){
                   console.err(err);
                   return;
               }
               debugger;
               $scope.catListData = catData;
           });
       };
        
       $scope.createNewCategory = function(){
           
       };
        
       $scope.$on('updateCategory', function(){
          $scope.getAllCategories(); 
       });
        
       $scope.init();  //initializing the view
    }
}());