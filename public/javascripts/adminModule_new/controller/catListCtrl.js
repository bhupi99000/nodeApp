(function(){
    'use strict';
    angular.module('myshop.adminModule.controller').controller('catListCtrl', ['$scope', '$uibModal', 'catService', catListCtrlHandler]);
    function catListCtrlHandler($scope, $uibModal, catService){
       var baseConfig = {
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           size: 'sm',
           appendTo: angular.element('body')
       };
        
        
       function updateCategory(){
            $scope.$emit('updateCategory');
        };
        
        $scope.createNewCategory = function(){
            var popup_config = angular.copy({
               templateUrl: 'javascripts/adminModule_new/view/edit-cat-tpl.html',
               controller: ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
                  $scope.title = 'Create Category';
                   
                  $scope.catName = '';
                  $scope.catDesc = '';
                   
                  $scope.ok = function () {
                    var promise = catService.createCategory({
                        catName: $scope.catName,
                        catDesc: $scope.catDesc
                    });
                    promise.then(function(result){
                        updateCategory();
                    }, function(err){
                        console.err(err);
                    });
                    $uibModalInstance.close();
                  };

                  $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                  };
               }]
            }, baseConfig);
            $uibModal.open(popup_config);
        };
        
        $scope.editCatItem = function(_item){
            var popup_config = angular.copy({
               templateUrl: 'javascripts/adminModule_new/view/edit-cat-tpl.html',
               controller: ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
                  $scope.data = _item;
                   
                  $scope.catName = _item.name;
                  $scope.catDesc = _item.cat_description;
                  $scope.catId = _item.id;
                   
                  $scope.title = 'Edit Category';
                   
                  $scope.ok = function () {
                    var promise = catService.saveCategory({
                        name: $scope.catName,
                        desc: $scope.catDesc,
                        id: $scope.catId
                    });
                    promise.then(function(result){
                        updateCategory();
                    }, function(err){
                        console.err(err);
                    });
                    $uibModalInstance.close();
                  };

                  $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                  };
               }]
            }, baseConfig);
            $uibModal.open(popup_config);
        };
        
        $scope.selectCategory = function(menuItem) {
            $scope.activeMenu = menuItem;
            catService.setSelectedCategory(menuItem);
            $scope.$emit('updateProductList', menuItem.id);
        };
    };
}());
