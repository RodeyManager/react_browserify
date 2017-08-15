'use strict';

const
	AppService = require('./app.service');

class TestService{
	constructor(){}

	getTestData(){
		return AppService.test({ 
			params: { 
				id: 1000
			} 
		}).then(res => res.data.data).catch(this.error.bind(this));
	}

	error(err){
		console.log(err);
	}

}

module.exports = TestService;