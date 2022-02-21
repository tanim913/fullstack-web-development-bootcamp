const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/",function (req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    var cityName = req.body.cityName;
    var appId = "302fcaf92b2820cb6e6ecf60bd69d9bc";
    var units = "metric";
    const  url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appId+"&units="+units;
    
    https.get (url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data); //data returned after requesting 
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(weatherData);
            console.log(weatherData.main.temp);
            console.log(weatherData.main.feels_like);
            console.log(weatherData.weather[0].description);
            res.write("<h1>Today's temperature of "+cityName+" is "+weatherData.main.temp+" degree celcius.</h1>");
            res.write("<h1>Feels like "+weatherData.main.feels_like+" degree celcius</h1>")
            res.write("<h3> This is " +weatherData.weather[0].description+ " in here.</h3>");
            res.write("<img src ="+imageUrl+">");
            res.send();
        })
    })
})
app.listen(3000, function(){
    console.log("Server started at port 3000.");
})