(function(){
    'use strict';
    angular.module('myshop.adminModule.controller')
        .controller('adminCtrl', ['$scope', '$uibModal', '$document' ,  ctrlHandler]);
    
    function ctrlHandler($scope, $uibModal, $document){
        $scope.msg = "hello there";
        
        $scope.showModal = function(config){
            
        };
    }
}());