const Sequelize = require('sequelize');
const urlToHtml = require('../models/urlToHtml');
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

//clear the queue by running the 'clearQueue' function every 45 seconds
chron.add(45, clearQueue);

module.exports = (req, res) => {
  //Handle cases where users forget to put 'http://' at the beginning of the URL'
  let url = utils.addHttp(req.body.url);
  //validate URL
  if (validUrl.isUri(url)) {
    //If URL is valid, add URL to db, receive id back from db, and add task to queue
    urlToHtml.create({
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

