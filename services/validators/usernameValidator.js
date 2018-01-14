const BaseValidator = require('./base');
const Utility = require('./../utility');
const AppConstants = require('./../../settings/constants');

class UsernameValidator extends BaseValidator {
  	constructor () {
    	super ();
  	}
  	
  	validator (str) {
    	if (AppConstants.USERNAME_REG_EXP.test(str)) {
      		return Utility.SuccessTypes.SUCCESS;
    	}
    	return Utility.ErrorTypes.INVALID_USERNAME;
  	}
};

module.exports = new UsernameValidator();