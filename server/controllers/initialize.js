const Sequelize = require('sequelize');
const connection = require('../db');

module.exports = (req, res) => {
  connection.sync()
  .then(() => {
    res.send('db initialized');
  })
  .catch(() => {
    res.send('error in initializiation!');
  });

};
