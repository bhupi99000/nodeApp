(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('dataService', ['$http', '$q', dataServiceHandler]);
    function dataServiceHandler($http, $q){
        var serviceObj = {
            
        };
        return serviceObj;
    }
}());