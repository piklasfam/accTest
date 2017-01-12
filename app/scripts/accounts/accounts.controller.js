
'use strict';

angular.module('myApp.accounts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accounts', {
    templateUrl: 'scripts/accounts/accounts.html',
    controller: 'accountsCtrl'
  });
}])

.controller('accountsCtrl', accountsCtrl);

accountsCtrl.$inject = [];

function accountsCtrl() {
   var vm = this;
}
