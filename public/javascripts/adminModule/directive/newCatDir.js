(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('newCatDir', [newCatDir]);
    
    function newCatDir(){
        var ddo={
            restrict: 'EA',
            scope: {
                catName:'=',
                catDesc:'=',
                onSubmit:'&'
            },
            templateUrl: 'javascripts/adminModule/view/newCat.html',
            replace: true,
            link: function(scope, element, attrs){
//                debugger;
            }
        }
        return ddo;
    }
}());