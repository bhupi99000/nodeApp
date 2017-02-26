(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('dataService', ['$http', '$q', dataServiceHandler]);
    function dataServiceHandler($http, $q){
        var serviceObj = {
            getCategories: function(){
                return $http({
                    method: 'GET',
                    url: '/getAllCategories',
                });
            }
        };
        return serviceObj;
    }
}());