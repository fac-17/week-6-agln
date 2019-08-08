const tape = require("tape");
const supertest = require("supertest");

const router = require("../src/router");

tape("Router: Check tape is working", t => {
  let num = 1;
  t.equal(num, 1, "One should equal one");
  t.end();
});

tape("Home route should return a status code of 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Home route should return status code 200");
      t.end();
    });
});

tape("Public route should render css file", t => {
  supertest(router)
    .get("/public/style.css")
    .expect(200)
    .expect("content-type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Public route should render css");
      t.end();
    });
});

//Public route - javascript
tape("Public route should render js", t => {
  supertest(router)
    .get("/public/dom.js")
    .expect(200)
    .expect("Content-type", /javascript/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Public route should render js");
      t.end();
    });
});

//Public route - favicon
tape("Public route should render favicon", t => {
  supertest(router)
    .get("/public/favicon.ico")
    .expect(200)
    .expect("Content-type", /x-ico/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Public route should render favicon");
      t.end();
    });
});

//404 ROUTE
tape("Should return 404 Page Not Found", t => {
  supertest(router)
    .get("/fhkwefhe")
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "Should return 404 status code");
      t.equal(
        res.text,
        `<h1>404: Page Not Found</h1>`,
        "Should return 404 Page Not Found"
      );
      t.end();
    });
});
