const Sequelize = require('sequelize');
const urltohtml = require('../models/urltohtml');

module.exports = (req, res) => {
  urltohtml.findOne({
    where: {
      id: req.body.jobid
    }
  }).then((data) => {
    // res.send(data);
    if (data.retrievedHTML === null) {
      res.send('html in process of being retrieved - please check back later');
    } else {
      res.send(data.retrievedHTML);
    }
  }).catch(() => {
    res.send('Error: jobid not in database - please ensure that the body of your request is formatted as json and in the following format: "jobid": " >> your jobid << "');
  });
};

