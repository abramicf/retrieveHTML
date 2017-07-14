const Sequelize = require('sequelize');
const connection = require('../db');

const urlToHtml = connection.define('urltohtml', {
  url: Sequelize.TEXT,
  retrievedHtml: Sequelize.TEXT
});

module.exports = urlToHtml;
