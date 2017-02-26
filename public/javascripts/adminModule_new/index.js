(function(){
    'use strict';
    angular.module('myshop.adminModule', [
        'myshop.adminModule.controller',
//        'myshop.adminModule.service',
//        'myshop.adminModule.directive',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider.state('admin', {
            url: '/admin-new',
            templateUrl: 'javascripts/adminModule_new/view/view_adminMain.html',
            controller: 'adminCtrl'
        });
    }])
    .constant('appConfig', {   //currently not in use
        CAT_URL: '/category/',
        
        
        
        
        PRD_URL: '/product/',
    });
}());