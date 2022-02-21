const express = require ("express");
const app = express();
const bodyParser = require("body-parser");

app.listen(3000, function(){
    console.log("Server started at port 3000.");
})