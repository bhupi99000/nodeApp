(function(){
    'use strict';
    angular.module('myshop.adminModule.controller').controller('prodListCtrl', ['$scope', prodHandler]);
    function prodHandler($scope){
        $scope.msg = "product list directive";
        
       
    }
}());