// const pg = require('pg');
const Sequelize = require('sequelize');
const connection = require('../db');

const urltohtml = connection.define('urltohtml', {
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html
  requestId: Sequelize.UUID,
  url: Sequelize.TEXT,
  retrivedHTML: Sequelize.TEXT
});

module.exports = urltohtml;
