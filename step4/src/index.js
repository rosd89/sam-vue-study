/**
 * Created by sam on 2017. 7. 16..
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('hello express')
});

const twice = require('./api/v1/twice/twice.router');
app.use('/api/v1/twice', twice);

module.exports = app;