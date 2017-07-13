const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postController = require('./controllers/postController');
const getController = require('./controllers/getController');
const initialize = require('./controllers/initialize');
// const Sequelize = require('sequelize');
const portNum = 3000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/urlToHtml', postController);
app.get('/api/urlToHtml', getController);
app.get('/api/initialize', initialize);

app.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

