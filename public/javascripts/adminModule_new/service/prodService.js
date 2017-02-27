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
            },
            
            createProduct: function(formData){
//            	var ajaxPromise = dataService.sendReceiveData({
//                    url: '/createNewProduct',
//                    method: 'POST',
//                    data: formData,
//                    special: {
//                        //                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//                        headers: { 'Content-Type': undefined },
//                        eventHandlers: {
//                            progress: function(c) {
//                                console.log('Progress -> ' + c);
//                                console.log(c);
//                            }
//                        },
//                        uploadEventHandlers: {
//                            progress: function(e) {
//                                console.log('UploadProgress -> ' + e);
//                                console.log(e);
//                            }
//                        }
//                    }
//                });
            	
            	$http.post('/createNewProduct', formData, {headers: { 'Content-Type': undefined }})
            		.then(function(result){
            			debugger;
            		}, function(err){
            			debugger;
            		});
            	
            }
        };
        
        return serviceObj;
        
    }
}());