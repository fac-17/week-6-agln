const fs = require("fs");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const handleHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404: Page Not Found</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
};

const handlePublic = (req, res, endpoint) => {
  const extension = endpoint.split(".")[1];
  //MIME types
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png"
  };
  const filePath = path.join(__dirname, "..", endpoint);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404: Page Not Found</h1>");
    } else {
      res.writeHead(200, { "content-type": extensionType[extension] });
      res.end(file);
    }
  });
};

let handleQuery = (req, res) => {
  const input = req.url.split("=")[1];
};

module.exports = { handleHome, handlePublic, handleQuery };
