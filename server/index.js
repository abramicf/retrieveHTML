const express = require('express');
const app = express();
const portNum = 3000;
const postController = require('./controllers/postController');
const getController = require('./controllers/getController');

app.post('/api/urlToHtml', postController);
app.get('/api/urlToHtml', getController);

app.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

