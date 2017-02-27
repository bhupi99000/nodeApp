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
                var data_watch = scope.$watch('data', function(newVal, oldVal){
                    if(newVal && newVal.length > 0){
                        scope.selectCategory(newVal[0]);
                        data_watch();
                    }
                });
            },
            controller: 'catListCtrl'
        };
        return ddo;
    };
}());