const fs = require("fs");
const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Warriors table is created: ", res);
  });
};

module.exports = runDbBuild;
