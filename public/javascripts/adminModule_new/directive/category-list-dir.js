(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('catListDir', [catListHandler]);
    function catListHandler(){
        var ddo = {
            restrict: 'EA',
            scope: {
                data: '='
            },
            replace: true,
            link: function(scope, element, attrs){
                
            }
        };
        return ddo;
    };
}());