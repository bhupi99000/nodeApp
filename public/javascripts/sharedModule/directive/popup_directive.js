(function(){
    'use strict';
    angular.module('myshop.sharedModule.directive').directive('popupDir', [dir_popupHandler]);
    function dir_popupHandler(){
        var ddo = {
            restrict: 'EA',
            scope:{
                config: '='
            },
            link: function(scope, element, attrs){

            },
            controller: ['$scope', '$uibModal', function($scope, $uibModal){
               $scope.$on('showModal', function(){
                    $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                          ariaDescribedBy: 'modal-body',
                          templateUrl: function(){
                              if($scope.config.tplUrl){
                                  return $scope.config.tplUrl;
                              }else{
                                  if($scope.config.mode === 'form'){
                                      return 'javascripts/sharedModule/view/form-popup-tpl.html';
                                  }else if($scope.config.mode === 'msg'){
                                      return 'javascripts/sharedModule/view/msg-popup-tpl.html';
                                  }
                              }
                              
                          },
                          controller: $scope.config.ctrl,
                          size: $scope.config.size,
                          appendTo: angular.element($scope.config.elm)
                    });
               });
               
               
            }]
        };
        return ddo;
    }
}());


//var parentElem = config && config.parentSelector ? 
//                                angular.element($document[0].querySelector(config.parentSelector)) : 
//                                angular.element('body');
//            
//            var modalInstance = $uibModal.open({
//                ariaLabelledBy: 'modal-title',
//                  ariaDescribedBy: 'modal-body',
//                    template: '<h1>Hi I am popup</h1>',
////                  templateUrl: 'myModalContent.html',
////                  controller: 'ModalInstanceCtrl',
////                  controllerAs: '$ctrl',
//                  size: 'sm',
//                  appendTo: parentElem,
//            });