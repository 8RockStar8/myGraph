const express = require('express');
const graphsRouter = express.Router();

const graphsService = require('./serviceGraph');

graphsRouter.get('/', (req, res) => {
	graphsService.getGraphs().then(data => {
		return res.render('graph.ejs', {
			data: data,
		});
	});
});

graphsRouter.post('/', (req, res) => {
	let graphs = {
		username: req.body.username,
		email: req.body.email
	}
	graphsService.insertGraphs(graphs).then(data => {
		return res.render('newgraph.ejs', {
			username: graphs.username,
			email: graphs.email
		});
	});
});

module.exports = graphsRouter;