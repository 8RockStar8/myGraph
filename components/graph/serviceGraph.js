const graphDAO = require('./private/graphDAO');

class graphsService {

	getGraphs() {
		return new Promise((resolve, reject) => {
			graphDAO.getData().then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		});
	}

	insertGraphs(graphs) {
		return new Promise((resolve, reject) => {
			graphDAO.insertData({
				username:graphs.username,
				email: graphs.email
			}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		});
	}

	// insertDefaultGraphs(usersGraphList) {
	// 	return new Promise((resolve, reject) => {
	// 		graphDAO.insertData({
	// 			username:usersGraphList.username,
	// 			email: usersGraphList.email
	// 		}).then(data => {
	// 			resolve(data);
	// 		}).catch(err => {
	// 			reject(err);
	// 		});
	// 	});
	// }
}

module.exports = new graphsService();