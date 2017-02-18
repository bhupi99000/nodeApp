(function() {
    'use strict';
    angular.module('myshop.adminModule.directive').directive('input', [inputDir]);
    function inputDir(){
        return {
            restrict: 'E',
            require: 'ngModel',
            link: function(scope, elem, attrs, ngModel){
                debugger;
                if(attrs.type == 'number'){
                    ngModel.$formatters.push(function(value){
                        return parseFloat(value);
                    });
                }
            }
        };
    }
}());