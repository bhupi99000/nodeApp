(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('listDir', [listDir]);
    
    function listDir(){
        var ddo={
            restrict: 'EA',
            scope: {
                listData: '='
            },
            templateUrl: 'javascripts/adminModule/view/list.html',
//            replace: true,
            link: function(scope, element, attrs){
//                debugger;
            },
            controller: ['$scope', function($scope){
                $scope.selectedIndex = null;
                $scope.showEditableRegion = function(index) {
                    $scope.selectedIndex = index;
                };
            }]
        }
        return ddo;
    }
}());