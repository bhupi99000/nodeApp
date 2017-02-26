(function(){
    'use strict';
    angular.module('myshop', [
        'myshop.adminModule',
        'ui.router',
        'ui.bootstrap'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/admin-new');
    }]);
}());