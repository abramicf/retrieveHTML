const Sequelize = require('sequelize');
const connection = require('../db');
const urltohtml = require('../models/urltohtml');
const validUrl = require('valid-url');
const utils = require('../utils');
const chron = new require('chron')();

let queue = [];

module.exports = (req, res) => {

  let url = utils.addHttp(req.body.url);

  if (validUrl.isUri(url)) {

    urltohtml.create({
      url: url
    })
    .then((data) => {
      //stick it into the queue
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

//Considerations not accounted for:

//1.  URLs that are set up correctly, but that don't point to an active page.  The provider (like ATT) still provides us some HTML.




//Resources:

// https://stackoverflow.com/questions/7772605/get-url-contents-in-node-js-with-express

// https://www.npmjs.com/package/xmlhttprequest

// https://gomakethings.com/getting-html-asynchronously-from-another-page/

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest

// Create a job queue whose workers fetch data from a URL and store the results in a database.  The job queue should expose a REST API for adding jobs and checking their status / results.

// Example:

// User submits www.google.com to your endpoint.  The user gets back a job id. Your system fetches www.google.com (the result of which would be HTML) and stores the result.  The user asks for the status of the job id and if the job is complete, he gets a response that includes the HTML for www.google.com