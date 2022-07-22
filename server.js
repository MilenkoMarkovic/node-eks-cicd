const express = require("express");
const os = require("os");
const app = express();
const port = 8000;
// create a get api
app.get("/", (req, res) => {
 res.json({
  message: "Hello from node app",
  date: new Date(),
  version: process.env.npm_package_version,
  os: os.platform(),
 });
});
// start a server
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
