const Sequelize = require('sequelize');
const connection = require('../db');

//used to recreate empty table in db, once table has been dropped.
module.exports = (req, res) => {
  connection.sync()
  .then(() => {
    res.send('db initialized');
  })
  .catch(() => {
    res.send('error in initializiation!');
  });

};
