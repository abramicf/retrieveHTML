const Sequelize = require('sequelize');

module.exports = new Sequelize('retrieveHTMLdb', 'abramicf', 'password', {
  dialect: 'postgres'
});


