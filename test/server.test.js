const supertest = require("supertest");
const tape = require("tape");
const router = require("../src/router");

tape('Home route should return a status code of 200', (t) => {
  supertest(router)
  .get('/')
  .expect(200)
  .expect('content-type', /html/)
  .end((err, res) => {
    t.error(err)
    t.equal(res.statusCode, 200, 'Home route should return status code 200')
    t.end()
  })
})
