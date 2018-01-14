const mongoose = require('mongoose');
require('./graphModel');
const baseGraphDAO = require('./../../core/baseGraphDAO');
const Conn = require('./../../core/dbConnection');

class graphDAO extends baseGraphDAO {
	constructor() {
		super(Conn.model('graphs'));
	}
}

module.exports = new graphDAO();