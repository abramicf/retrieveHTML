const pg = require('pg');
const Sequelize = require('sequelize');


module.exports = new Sequelize('retrievehtmldb', 'abramicf', 'password', {
  dialect: 'postgres'
});


