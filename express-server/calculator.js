const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}))


app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
    
})

app.post("/", function(req, res){
    var a = Number(req.body.n1) + Number(req.body.n2);
    res.send("The result is :"+a);
})

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmi-calculator.html");
    
})

app.post("/bmicalculator", function(req, res){
    var a = Number(req.body.Weight) / (Number(req.body.Height) *Number(req.body.Height));
    res.send("The BMI is : "+a);
})



app.listen(3000,function(){
    console.log("server started at port 3000.");
});