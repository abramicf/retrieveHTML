const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const requestHtml = require('./controllers/requesthtml');
const retrieveHtml = require('./controllers/retrievehtml');
const sync = require('./controllers/sync');

const portNum = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Adds a URL to the queue, to be fetched, and returns a jobid number.
app.post('/api/requestHtml', requestHtml);
//Look up a jobid and see if the HTML has been retrieved for that job number.  If it has, it will be returned
app.post('/api/retrieveHtml', retrieveHtml);
app.get('/api/sync', sync);

app.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

