const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppConstants = require('./../../../settings/constants');
const emailValidator = require('./../../../services/validators/emailValidator');
const usernameValidator = require('./../../../services/validators/usernameValidator')

let graphSchema = Schema({
	username: {
		type: String,
		index: {unique: true},
		minLength: AppConstants.USERNAME_MIN_LENGTH,
		maxLength: AppConstants.USERNAME_MAX_LENGTH
	},
	email: {
		type: String,
		lowercase: true,
		minLength: AppConstants.EMAIL_MIN_LENGTH,
		maxLength: AppConstants.EMAIL_MAX_LENGTH
	}
});

module.exports = mongoose.model('graphs', graphSchema);