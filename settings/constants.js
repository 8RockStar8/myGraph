
const AppConstants = {

	OFFSET_DEFAULT_VALUE: 0,
  	LIMIT_DEFAULT_VALUE: 20,

	USERNAME_MIN_LENGTH: 4,
  	USERNAME_MAX_LENGTH: 20,

  	EMAIL_MIN_LENGTH: 6,
  	EMAIL_MAX_LENGTH: 30,

  	USERNAME_REG_EXP: /^([\w+_]){4,24}$/,
  	EMAIL_REG_EXP:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,

  	DB_URL:'127.0.0.1:27017/myGraph',
}

module.exports = AppConstants;