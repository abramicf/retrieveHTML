const Sequelize = require('sequelize');
const urltohtml = require('../models/urltohtml');
const validUrl = require('valid-url');
const fetch = require('node-fetch');
const utils = require('../utils');
const chron = new require('chron')();

let queue = [];

clearQueue = () => {
  while (queue.length > 0) {
    let val = queue.shift();
    utils.fetchHTML(val.url, val.id);
  }
  console.log(queue);
  console.log('Queue Cleared!');
};

chron.add(5, clearQueue);

module.exports = (req, res) => {
  let url = utils.addHttp(req.body.url);
  if (validUrl.isUri(url)) {
    urltohtml.create({
      url: url
    })
    .then((data) => {

      let queueTask = {
        id: data.id,
        url: url
      };

      queue.push(queueTask);
      res.send('Request for HTML is being made - your jobid is ' + data.id);
      console.log(queue);
    })
    .catch(() => {
      res.send('Error posting to database - please retry');
    });
  } else {
    res.send('Please supply valid URL');
  }
};

