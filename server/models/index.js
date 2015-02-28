var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(error, rows, fields) {
        if (error) console.log(error);
        console.log(rows, fields);
        callback(rows);
      });
    }, // a function which produces all the messages
    post: function (dataObj, callback) {
      console.log('Entered Post Model Function');
      var query = 'INSERT INTO messages VALUES (' + dataObj.username + ', ' + dataObj.message + ', ' + dataObj.roomname + ');';
      db.connection.query(query, function(error, results) {
        console.log('DB Queried');
        if (error) console.log(error);
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

