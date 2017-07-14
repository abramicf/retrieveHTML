//utility functions that could reasonably be considered to be 'reused' in another part of an application

const Sequelize = require('sequelize');
const fetch = require('node-fetch');
const urlToHtml = require('./models/urlToHtml');


module.exports = {

  //Adds 'http:// to the url if it begins with 'www'.
  addHttp: (url) => {
    let substr = url.substring(0, 3);
    if (substr === 'www') {
      return 'http://' + url;
    } else {
      return url;
    }
  },

  //The 'worker' function that will be used when clearing the queue.  Fetches the HTML for a given url and inserts it into the database at the given id.
  fetchHTML: (url, id) => {
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        urlToHtml.update({
          retrievedHtml: html,
        }, {
          fields: ['retrievedHtml'],
          where: {
            id: id
          }
        });
      });
  }
};