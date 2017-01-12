
'use strict';

angular.module('myApp.accounts')
  .directive('accountsListing', [accountsListing])
  .controller('accountsListingCtrl', accountsListingCtrl);

function accountsListing() {
  var varDirective = {
    restrict: 'E',
    templateUrl: 'scripts/directives/accountsListing.html',
    controller: accountsListingCtrl,
    controllerAs: 'vm'
  };
  return varDirective;
}

accountsListingCtrl.$inject = ['accountService'];

function accountsListingCtrl(accountService) {
  //initialization of parameters and functions
  var vm = this;
  vm.accountType = '0';
  vm.getAccountsByType = getAccountsByType;
  vm.accountTypes = [{'name' : 'asset'},{ 'name': 'liability'}];
  vm.data = accountService.getData(0);

  function getAccountsByType() {
  	 vm.data = accountService.getData(vm.accountType);
  }
};