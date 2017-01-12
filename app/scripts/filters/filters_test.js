describe('The test filter', function () {
  'use strict'; 

  var $filter;

  beforeEach(module('myApp.accounts'));      

  beforeEach(angular.mock.inject(function (_$filter_){
    $filter = _$filter_;
  }));

  it('should sort array order first by favourite true, then by balance decsending order', function () {
    var foo = [{ "accountNumber": "1", "type": "1",  "balance": 1, "favourite": true },
               { "accountNumber": "2", "type": "1",  "balance": 2, "favourite": false },
               { "accountNumber": "3", "type": "2",  "balance": 3, "favourite": false },
               { "accountNumber": "4", "type": "2",  "balance": 4, "favourite": true }], 
    result,
    trueResult = [{ "accountNumber": "4", "type": "2",  "balance": 4, "favourite": true },
                  { "accountNumber": "1", "type": "1",  "balance": 1, "favourite": true },
                  { "accountNumber": "3", "type": "2",  "balance": 3, "favourite": false },
                  { "accountNumber": "2", "type": "1",  "balance": 2, "favourite": false }];

    result = $filter('toSort')(foo);

    expect(result).toEqual(trueResult);
  });
});