const AppConstants = require('./../settings/constants');

const ErrorTypes = {

	USERNAME_MISSING: "Username missing",
	INVALID_USERNAME: "Username must have only letters, numbers and (_, -, .) symbols. ",
	INVALID_USERNAME_RANGE: "invalid username range",

	EMAIL_MISSING: "Email missing",
    INVALID_EMAIL: "Invalid email",
    INVALID_EMAIL_RANGE: "Invalid email range",

}

class Utility {
	// static parserQuery(req, res, next) {
	// 	req.query.offset = parseInt(req.query.offset);
	// 	if(!isFinite(req.query.offset)) {
	// 		req.query.offset = AppConstants.OFFSET_DEFAULT_VALUE;
	// 	}

	// 	req.query.limit = parseInt(req.query.limit);
	// 	if(!isFinite(req.query.limit)) {
	// 		req.query.limit = AppConstants.LIMIT_DEFAULT_VALUE;
	// 	}
	// 	naxt();
	// }

	static generateErrorMessage(type, options) {
		options = options || {};
		let error_object = {
			type: type || ErrorTypes.UNKNOWN_ERROR,
			message: "Something went wrong..."
		};

		switch (type) {
			case ErrorTypes.USERNAME_MISSING:
				error_object.message = USERNAME_MISSING;
                break;
            case ErrorTypes.INVALID_USERNAME:
            	error_object.message = "Username must have only letters, numbers and (_, -, .) symbols.";
            	break;
           	case ErrorTypes.INVALID_USERNAME_RANGE:
           		error_object.message = "Invalid min/max value for username, must be >= {min} and <= {max}".replace("{min}", AppConstants.USERNAME_MIN_LENGTH)
                .replace("{max}", AppConstants.USERNAME_MAX_LENGTH);
                break;
            case ErrorTypes.EMAIL_MISSING:
				error_object.message = EMAIL_MISSING;
				break;
			case ErrorTypes.INVALID_EMAIL:
				error_object.message = INVALID_EMAIL;
				break;
			case ErrorTypes.INVALID_EMAIL_RANGE:
				error_object.message = "Invalid min/max value for email, must be >= {min} and <= {max}".replace("{min}", AppConstants.EMAIL_MIN_LENGTH)
				.replace("{max}", AppConstants.EMAIL_MAX_LENGTH);
				break;
		}
		return error_object;
	}
}

module.exports = new Utility();
module.exports.ErrorTypes = ErrorTypes;