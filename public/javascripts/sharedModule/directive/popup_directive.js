(function(){
    'use strict';
    angular.module('myshop.sharedModule.directive').directive('popupDir', [dir_popupHandler]);
    function dir_popupHandler(){
        var ddo = {
            
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