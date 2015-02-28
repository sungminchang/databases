var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows) {
        console.log('Get method');
        // send the results back in the response
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('Entered Post Request Controller');
      // get the data from the request
      utils.collectData(req, function(dataObj) {
        console.log('Data collected from Post request');
        // call models.messages.post() method (insert into database)
        models.messages.post(dataObj, function(results) {
          // respond
          console.log('post complete!');
          utils.sendResponse(res, results, 201);
        });
      });



      // return a response?

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

