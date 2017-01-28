(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('dropdown', [dropDown]);
    
    function dropDown(){
        var ddo={
            restrict: 'EA',
            scope: {
                listData: '=',
                selectedItem: '='
            },
            template: function(){
                var tpl = `
                        <div class="dropdown" class="col-sm-10">
                            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">{{selectedItem.name}}
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                                <li role="presentation" ng-repeat="item in listData" ng-click="onChange($index)"><a role="menuitem" href="#">{{item.name}}</a></li>
                            </ul>
                        </div>
                    `;
                return tpl;
            },
            replace: true,
            link: function(scope, element, attrs){
//                debugger;
            },
            controller: ['$scope', function($scope){
                $scope.onChange = function(idx){
                    $scope.selectedItem = $scope.listData[idx];                    
                };
                
                var catListWatcher = $scope.$watch('listData', function(newVal, oldVal){
                    if(newVal[0]){
                        $scope.selectedItem = newVal[0];
                        catListWatcher();     
                    }
                });
            }]
        }
        return ddo;
    }
}());