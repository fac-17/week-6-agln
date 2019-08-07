const handlers = require(".handler");

const router = (req, res) => {
  if (req.url === "/") {
    req.url = "/public/index.html";
  }
  if (req.url.startsWith("/public")) {
  // PUT PUBLIC HANDLER HERE
  }
  else if (req.url.startsWith("")) {
    // PUT OTHER HANDLERS FOR FRONT API CALL HERE
  }
  else {
    // PUT 404 HANDLER HERE
  }
}

module.exports = router;
