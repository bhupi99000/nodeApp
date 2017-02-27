(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('prodListDir', [prodListHandler]);
    function prodListHandler(){
        var ddo = {
            restrict: 'EA',
            templateUrl: 'javascripts/adminModule_new/view/prod-list-tpl.html',
            scope: {
                data: '='
            },
            replace: true,
            link: function(scope, element, attrs){
//            	element.on('submit', function(evt) {
//                    var formData = new FormData(evt.target);
//                    scope.onSubmit(formData);
//                });
            },
            controller: 'prodListCtrl'
        };
        return ddo;
    }
}());