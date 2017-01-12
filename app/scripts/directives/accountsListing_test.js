describe('testing accountsListing.js -', function() {
	'use strict'; 
	var $compile, el, ctrl, scope, vm, $controller, $rootScope;
	var accountService;
	//mocks
	var data = [{ "accountNumber": "12345", "type": "asset",  "balance": 233.33, "favourite": true },{ "accountNumber": "56789", "type": "asset",  "balance": 167.56, "favourite": false },{ "accountNumber": "12455", "type": "liability",  "balance": 567.45, "favourite": false },{ "accountNumber": "12675", "type": "liability",  "balance": 67.56, "favourite": true }];

	beforeEach(module('myApp.accounts')); 
	// Initialize modules, mock services, etc
	beforeEach(module(function($provide) {
		$provide.service('accountService', function() {
			this.getData = function() {
				return data;
			};
		});
	}));

	var $httpBackend;
  	beforeEach(inject(function($injector) {
    	$httpBackend = $injector.get('$httpBackend');
    	$httpBackend.whenGET('scripts/directives/accountsListing.html').respond(200, '');
  	}));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		
		scope = $rootScope.$new();
		el = angular.element('<accounts-listing></accounts-listing>');
		$compile(el)(scope);
		scope.$digest();

		ctrl = el.controller('accountsListing');
		scope = el.isolateScope() || el.scope();
		vm = scope.vm;
	}));
  
	describe('testing compilation / linking -', function() {
      	it('should have found directive and compiled template', function() {
        	expect(el).toBeDefined();
        	expect(el.html()).not.toEqual('');
      	});
		  it('should have a defined controller', function() {
				expect(ctrl).toBeDefined();
				expect(ctrl).toBeTruthy();
			});
			it('should have a defined scope', function() {
				expect(scope).toBeDefined();
				expect(scope).toBeTruthy();
			});
	});


});