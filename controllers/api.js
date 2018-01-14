const graphApi = require('./../components/graph/apiGraph');

class apiV1 {

	initialize(app) {
		app.use('/newData', graphApi);
		app.use('/usersGraphData', graphApi);
		app.get('/', (req, res) => {
			return res.render('index', {
				title: 'My Graph'
			});
		});
	}

}

module.exports = new apiV1();