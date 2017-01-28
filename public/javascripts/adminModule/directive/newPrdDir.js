(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('newPrdDir', [newPrdDir]);
    
    function newPrdDir(){
        var ddo={
            restrict: 'EA',
            scope: {
                catList:'=',
                onSubmit:'='
            },
            templateUrl: 'javascripts/adminModule/view/newPrd.html',
            replace: true,
            link: function(scope, element, attrs){
                element.on('submit', function(evt){
                    var formData = new FormData(evt.target);
                    scope.onSubmit(formData);
                });
            },
            controller: ['$scope', function($scope){
                $scope.prdImgs = [];
                $scope.selectedItem = '';
                $scope.onFileNameChanged = function(element){
                        $scope.prdImgs = element.files;
                };
            }]
        }
        return ddo;
    }
}());