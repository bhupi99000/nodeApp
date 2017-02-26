(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('prodService', ['$http', prodServiceHandler]);
    function prodServiceHandler($http){
        
        var serviceObj = {
            getProductList: function(catId, callback){
                $http.get('/getProductList?catId='+catId).then(function(result){
                    callback(null, result.data);
                }, function(err){
                    callback(err);
                });
            }
        };
        
        return serviceObj;
        
    }
}());