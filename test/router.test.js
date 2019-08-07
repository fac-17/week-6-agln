const test = require("tape");
const supertest = require("supertest");

const router = require("../src/router");

test("Check tape is working", t => {
  let num = 1;
  t.equal(num, 1, "One should equal one");
  t.end();
});
