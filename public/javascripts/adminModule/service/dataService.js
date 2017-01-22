(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('dataService', ['$http', dataService]);
    
    function dataService($http){
        var serviceObj = {
            sendReceiveData: function(config){
                return $http({
                    url: config.url,
                    method: config.method,
                    data: config.data
                });
            }
        };
        
        return serviceObj;
    }
    
}());