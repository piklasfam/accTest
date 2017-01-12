'use strict';
angular.module('myApp.accounts')
.filter('toSort', function() { return function(obj) {
    if (!(obj instanceof Object)) return obj;

    var cmp = function(a, b) {
    	if (a > b) return -1;
    	if (a < b) return +1;
    	return 0;
	}

	return obj.sort(function(a, b) { 
    	return cmp(a.favourite,b.favourite) || cmp(a.balance,b.balance);
	});

}});