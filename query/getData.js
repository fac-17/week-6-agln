const databaseConnection = require('../database/db_connection.js');

const getSum = cb => {
  databaseConnection.query('SUM', (err, res) => {
    if (err) {
      cb(err);
    }
    else {
      cb(null, res.rows);
    }
  });
};

module.exports = getSum;
