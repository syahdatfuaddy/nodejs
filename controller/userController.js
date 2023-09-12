const path = require("path");


const viewUser = (req, res) => {
    res.sendFile(process.cwd() + "/views/test.html");
  }

  module.exports = {viewUser}