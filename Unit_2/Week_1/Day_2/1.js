// step 1
const express = require("express");


//step 2
const app = express();

//step 3 
app.get("/", (req, res) => {
    res.send({msg:"Welcome to express server"});
});

app.get("/home", (req, res) => {
    res.send({msg:" home page"});
});

app.get("/about", (req, res) => {
    res.send({msg:" about page"});
});


//step 4
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});