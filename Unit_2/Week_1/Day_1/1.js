//step 0 npm init -y
// Step 1 - Import Express
const express = require("express");

// Step 2 - Create an app through Express.js
const app = express();

// Step 3 - Create API / Routing
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Step 4 - Listen / Run app on port
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});