(function(){
    'use strict';
    angular.module('myshop', [
        'myshop.adminModule',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/admin');
    }]);
}());