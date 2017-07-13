const Sequelize = require('sequelize');
const fetch = require('node-fetch');
const urltohtml = require('./models/urltohtml');


module.exports = {

  addHttp: (url) => {
    let substr = url.substring(0, 3);
    if (substr === 'www') {
      return 'http://' + url;
    } else {
      return url;
    }
  },

  fetchHTML: (url, id) => {
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        urltohtml.update({
          retrievedHTML: html,
        }, {
          fields: ['retrievedHTML'],
          where: {
            id: id
          }
        });
      });
  }
};