const Sequelize = require('sequelize');
const connection = require('./db');

const retrieveHTMLtable = connection.define('retrieveHTMLtable', {
  //http://docs.sequelizejs.com/manual/tutorial/models-definition.html
  requestId: Sequelize.UUIDV4,
  url: Sequelize.TEXT,
  retrivedHTML: Sequelize.TEXT
});