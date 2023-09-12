const path = require("path");


const viewHome = (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
  }

  module.exports = {viewHome}