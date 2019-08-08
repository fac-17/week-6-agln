const tape = require("tape");
const runDbBuild = require("../database/db_build");
const getData = require("../query/getData");
const postData = require("../query/postData");

// This test does not work present, needs to be refactored

// tape("Check if harcode warrior is present", t => {
//   runDbBuild((err, res) => {
//     t.error(err, "No error");

//     getData((err, res) => {
//       console.log("This is response: ", res);
//       // console.log("This is ", res.warrior_name);
//       // JSON.stringify(res);

//       // t.equal(res.warrior_name, "")
//       t.end();
//     });
//   });
// });
