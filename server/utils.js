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

  fetchHTML: (url) => {
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        insertHTML(response, data.id);
      });
    },


  insertHTML: (html, idInfo) => {
    // res.send(html);
    urltohtml.update({
      retrievedHTML: html,
    }, {
      fields: ['retrievedHTML'],
      where: {
        id: idInfo
      }
    });
  }




};