const express = require("express");
const app = express();
const port = 3000;
const homeController = require("./controller/homeController.js")
const userController = require("./controller/userController.js")


app.get("/", homeController.viewHome);


  app.get("/test", userController.viewUser);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });