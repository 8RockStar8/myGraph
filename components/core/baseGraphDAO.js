
class baseGraphDAO {
	constructor(collection) {
		this.collection = collection;
	}

	getData(query) {
		if(!this.collection) {
			throw 'contract violation';
		}
		query = query || {};
		return this.collection.find(query);
	}

	insertData(query) {
		if(!query) {
			throw 'invalid query';
		}
		return this.collection.create(query);
	}
}

module.exports = baseGraphDAO;