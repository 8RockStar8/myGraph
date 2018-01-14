const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

const apiV1 = require('./controllers/api');

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

apiV1.initialize(app);

app.listen(9999, function(){
	console.log('Server listen port 9999');
});