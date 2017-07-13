const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const requesthtml = require('./controllers/requesthtml');
const retrievehtml = require('./controllers/retrievehtml');
const initialize = require('./controllers/initialize');
// const Sequelize = require('sequelize');
const portNum = 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/requesthtml', requesthtml);
app.post('/api/retrievehtml', retrievehtml);
app.get('/api/initialize', initialize);

app.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

//