'use strict';

  angular.module('myApp.accounts').factory('accountService', function () {

  	var accountsData = [
  		{ "accountNumber": "12345", "type": "asset",  "balance": 233.33, "favourite": true },
  		{ "accountNumber": "56789", "type": "asset",  "balance": 167.56, "favourite": false },
  		{ "accountNumber": "12455", "type": "liability",  "balance": 567.45, "favourite": false },
  		{ "accountNumber": "12675", "type": "liability",  "balance": 67.56, "favourite": true }
  	];

  	return {
  		getData: function(category){
  			if (category === 0) {
  				return accountsData;
  			} else {
  				var newAccountsList = [];
  				angular.forEach(accountsData, function(key) {
  					if (key.type === category) {
  						newAccountsList.push(key);
  					}
  				});
  				console.log(newAccountsList);
  				return newAccountsList;
  			}
  		}
  	}

  });

