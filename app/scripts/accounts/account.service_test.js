describe('testing account.service.js :',function(){
	var accountService;

	beforeEach(module('myApp.accounts'));

	beforeEach(inject(function (_accountService_){
		accountService = _accountService_;
	}));

	it('should exist',function(){
		expect(accountService).toBeDefined();
	});

	describe('testing the getData function',function(){
		it('should exist',function(){
			expect(accountService.getData).toBeDefined();
		});
		it('should run',function(){
			accountService.getData();
		});

	    it('should return all data if category = 0',function(){
	    	var category = 0;
	    	var data =[{ "accountNumber": "12345", "type": "asset",  "balance": 233.33, "favourite": true },{ "accountNumber": "56789", "type": "asset",  "balance": 167.56, "favourite": false },{ "accountNumber": "12455", "type": "liability",  "balance": 567.45, "favourite": false },{ "accountNumber": "12675", "type": "liability",  "balance": 67.56, "favourite": true }];
			accountService.getData(category);
			expect(accountService.getData(category)).toEqual(data);			
		});

		it('should return data given if category = asset' ,function(){
	    	var category = 'asset';
	    	var data =[{ "accountNumber": "12345", "type": "asset", "balance": 233.33, "favourite": true },{ "accountNumber": "56789", "type": "asset",  "balance": 167.56, "favourite": false }];
			accountService.getData(category);
			expect(accountService.getData(category)).toEqual(data);			
		});

		it('should return data given if category = liability',function(){
	    	var category = 'liability';
	    	var data =[{ "accountNumber": "12455", "type": "liability",  "balance": 567.45, "favourite": false },{ "accountNumber": "12675", "type": "liability",  "balance": 67.56, "favourite": true }];
			accountService.getData(category);
			expect(accountService.getData(category)).toEqual(data);			
		});
	
	});

});