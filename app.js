const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/server.config');
const app = express();
const autoIncrement = require('mongoose-auto-increment');

const port = process.env.PORT || 8282;

const server = app.listen(port, function() {
    console.log("Express server has started on port " + port)
});

mongoose.connect(config.dbUrl());

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to mongodb server');
});
autoIncrement.initialize(db);

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/', require('./api'));
app.use('/files', express.static(__dirname + '/files'));

module.exports = app;