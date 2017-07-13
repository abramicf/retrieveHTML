const Sequelize = require('sequelize');
const connection = require('../db');
const urltohtml = require('../models/urltohtml');
const fetch = require('node-fetch');
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var afterLoad = require('after-load');
// afterLoad('https://google.com', function(html){
//    console.log(html);
// });


module.exports = (req, res) => {
  urltohtml.create({
    url: req.body.url
  })
  .then((data) => {
    // res.send(data);
    fetch(req.body.url)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        // res.send(html);
        urltohtml.update({
          retrievedHTML: html,
        }, {
          fields: ['retrievedHTML'],
          where: {
            id: data.id
          }
        });
      })
      .then(() => {
        res.send('Information successfully retrieved!');
      })
      .catch(() => {
        res.send('Error retrieving information from database');
      });
  })
  .catch(() => {
    res.send('Error posting to database - please retry');
  });
};




//Resources:

// https://stackoverflow.com/questions/7772605/get-url-contents-in-node-js-with-express

// https://www.npmjs.com/package/xmlhttprequest

// https://gomakethings.com/getting-html-asynchronously-from-another-page/

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest

// Create a job queue whose workers fetch data from a URL and store the results in a database.  The job queue should expose a REST API for adding jobs and checking their status / results.

// Example:

// User submits www.google.com to your endpoint.  The user gets back a job id. Your system fetches www.google.com (the result of which would be HTML) and stores the result.  The user asks for the status of the job id and if the job is complete, he gets a response that includes the HTML for www.google.com