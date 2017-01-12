'use strict';

describe('myApp.accounts module', function() {

  beforeEach(module('myApp.accounts'));

  describe('accounts controller', function(){

    it('should have a accountsCtrl controller', inject(function($controller) {
      //spec body
      var accountsCtrl = $controller('accountsCtrl');
      expect(accountsCtrl).toBeDefined();
    }));

  });
});