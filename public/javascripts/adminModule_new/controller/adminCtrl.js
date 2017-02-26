(function(){
    'use strict';
    angular.module('myshop.adminModule.controller')
        .controller('adminCtrl', ['$scope', '$uibModal', '$document', 'dataService',  ctrlHandler]);
    
    function ctrlHandler($scope, $uibModal, $document, dataService){        
        $scope.popupConfig = {
           //mode: 'form/msg',
           tplUrl: 'javascripts/adminModule_new/view/edit-tpl.html',
           ctrl: ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
                  $scope.ok = function () {
                    $uibModalInstance.close();
                  };

                  $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                  };
           }],
           size: 'sm',
           elm: 'body'
       };
        
        $scope.showModal = function(config){
            $scope.$broadcast('showModal');
        };
        
       $scope.init = function(){
           $scope.getAllCategories();
       };
        
       $scope.getAllCategories = function(){
           var promise = dataService.getCategories();
           promise.then(function(data){
               debugger;               
           }, function(err){
               debugger;
           });
       };
        
       $scope.createNewCategory = function(){
           
       };
        
       $scope.init();  //initializing the view
    }
}());