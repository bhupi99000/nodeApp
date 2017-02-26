(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('catListDir', [catListHandler]);
    function catListHandler(){
        var ddo = {
            restrict: 'EA',
            templateUrl: 'javascripts/adminModule_new/view/cat-list-tpl.html',
            scope: {
                data: '='
            },
            replace: true,
            link: function(scope, element, attrs){

            },
            controller: 'catListCtrl'
        };
        return ddo;
    };
}());