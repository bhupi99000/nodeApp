(function(){
    'use strict';
    angular.module('myshop.adminModule.service').factory('catService', ['dataService', '$http', '$q', catServiceHandler]);
    function catServiceHandler(dataService, $http, $q){
        var cacheData = {};
        
        var serviceObj = {
            getAllCategories: function(callback){
//                if(cacheData.catList){
//                    callback(cacheData.catList);
//                    return;
//                }
                $http.get('/getAllCategories').then(function(result){
                    cacheData.catList = result.data;
                    callback(null, cacheData.catList);
//                    callback(null, []);
                }, function(err){
                    callbakc(err);
                });
            },
            
            saveCategory: function(catObj){
                return $http.post('/editCategory', catObj);
            },
            
            createCategory: function(catObj){
                debugger;
                return $http.post('/create_category', catObj);
            }
        };
        return serviceObj;
    }
}());