const databaseConnection = require("../database/db_connection");

const postData = (warrior_name, warrior_c1, warrior_c2, warrior_c3, cb) => {
  databaseConnection.query(
    "INSERT INTO warriors (warrior_name, warrior_c1, warrior_c2, warrior_c3) VALUES ($1, $2, $3, $4)",
    [warrior_name, warrior_c1, warrior_c2, warrior_c3],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postData;
