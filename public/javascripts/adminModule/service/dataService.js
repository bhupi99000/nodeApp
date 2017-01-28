(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('dataService', ['$http', dataService]);
    
    function dataService($http){
        var serviceObj = {
            sendReceiveData: function(config){
                var payload = {
                    url: config.url,
                    method: config.method,
                    data: config.data
                };
                if(config.special){
                    angular.extend(payload, config.special);
                }
                return $http(payload);
            }
        };
        
        return serviceObj;
    }
    
}());