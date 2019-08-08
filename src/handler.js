const fs = require("fs");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const postData = require("../query/postData");

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
  const input = req.url
    .split("=")[1]
    .split("$")
    .join("")
    .split("{")
    .join("")
    .split("}")
    .join("")
    .split("&");
  // validate our data
  let warrior_name = input[0];
  let warrior_c1 = input[1];
  let warrior_c2 = input[2];
  let warrior_c3 = input[3];

  postData(warrior_name, warrior_c1, warrior_c2, warrior_c3, err => {
    if (err) {
      console.log("Something went wrong with your submission");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(JSON.stringify(`${warrior_name}`));
    }
  });
};

module.exports = { handleHome, handlePublic, handleQuery };
