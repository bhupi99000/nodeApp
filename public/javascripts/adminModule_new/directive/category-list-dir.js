(function(){
    'use strict';
    angular.module('myshop.adminModule.directive').directive('catListDir', [catListHandler]);
    function catListHandler(){
        var ddo = {
            restrict: 'EA',
//            template: function(){
//                return `<div class="list-group">
//                        <a class="list-group-item" 
//                            ng-class="{active : activeMenu === item}"
//                            ng-repeat="item in data track by $index" 
//                            data-id="{{item.id}}"
//                            ng-click="setActive(item)"
//                            >
//                            {{item.name}} 
//                            <span class="glyphicon glyphicon-pencil" popup-dir config="popupConfig" ng-click="editCatItem(item)"></span>
//                        </a>
//                    </div>
//                `;
//            },
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