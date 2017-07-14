const Sequelize = require('sequelize');
const urlToHtml = require('../models/urlToHtml');

module.exports = (req, res) => {
  urlToHtml.findOne({
    where: {
      id: req.body.jobid
    }
  }).then((data) => {
    //queue has not been cleared, or queue has been cleared and awaiting async response
    if (data.retrievedHtml === null) {
      res.send('html in process of being retrieved - please check back later');
    } else {
      res.send(data.retrievedHtml);
    }
  }).catch(() => {
    //user enters an id not in db, or doesn't enter information in the proper format
    res.send('Error: jobid not in database - please ensure that the body of your request is formatted as json and in the following format: "jobid": " >> your jobid << "');
  });
};

