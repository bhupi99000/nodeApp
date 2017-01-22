(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('newPrdDir', [newPrdDir]);
    
    function newPrdDir(){
        var ddo={
            restrict: 'EA',
            scope: {
                catList:'=',
                selectedItem:'=',
                prdName:'=',
                prdPrice:'=',
                prdDiscount:'=',
                prdDesc:'=',
                onSubmit:'&'
            },
            templateUrl: 'javascripts/adminModule/view/newPrd.html',
            replace: true,
            link: function(scope, element, attrs){
//                debugger;
            }
        }
        return ddo;
    }
}());