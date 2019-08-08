const databaseConnection = require('../database/db_connection.js');

const getSum = cb => {
  databaseConnection.query('SELECT warrior_name, (warrior_c1 + warrior_c2 + warrior_c3 + 1) AS "warrior_total" FROM warriors',
  (err, res) => {
    if (err) {
      cb(err);
    }
    else {
      cb(null, res.rows);
    }
  });
};

module.exports = getSum;
