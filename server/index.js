const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postController = require('./controllers/requesthtml');
const getController = require('./controllers/retrievehtml');
const initialize = require('./controllers/initialize');
// const Sequelize = require('sequelize');
const portNum = 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/requesthtml', postController);
app.post('/api/retrievehtml', getController);
app.get('/api/initialize', initialize);

app.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

