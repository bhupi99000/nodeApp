(function(){
    'use strict';
    angular.module('myshop.adminModule.controller').controller('prodListCtrl', ['$scope', '$uibModal', 'catService', 'prodService', prodHandler]);
    function prodHandler($scope, $uibModal, catService, prodService){
        $scope.msg = "product list directive";
        
        var baseConfig = {
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           size: 'sm',
           appendTo: angular.element('body')
       };
        
        $scope.createNewProduct = function(){
            var selCat = catService.getSelectedCategory();
            debugger;
            var popup_config = angular.copy({
               templateUrl: 'javascripts/adminModule_new/view/popup-prod-tpl.html',
               controller: ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
                  $scope.title = 'Create Product for '+(selCat.name);
                  
                  $scope.prdName = '';
                  $scope.prdPrice = '';
                  $scope.prdDiscount = '';
                  $scope.prdDesc = '';
                  $scope.prdImgs = [];
                  $scope.catId = selCat.id;
                  
                  $scope.onFileNameChanged = function(element) {
                      $scope.prdImgs = element.files;
                  };
                  
//                  $scope.catName = '';
//                  $scope.catDesc = '';
                   
                  $scope.ok = function ($event, formName) {
                	  var prdName = $scope.prdName;
                      var prdPrice = $scope.prdPrice;
                      var prdDiscount = $scope.prdDiscount;
                      var prdDesc = $scope.prdDesc;
                      var prdImgs = $scope.prdImgs;
                      debugger;
                      //var $elm = angular.element(document.querySelector('form[name='+formName+']'));
                      var formData = new FormData(document.querySelector('form[name="'+formName+'"]'));
                      prodService.createProduct(formData);
                    $uibModalInstance.close();
                  };

                  $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                  };
               }]
            }, baseConfig);
            $uibModal.open(popup_config);
            
            
        };
    }
}());